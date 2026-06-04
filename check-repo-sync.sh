#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

print_section() {
  printf "\n[%s]\n" "$1"
}

missing=0

print_section "1. Required files"
required_files=(
  "SKILL.md"
  "INDEX.md"
  "README.md"
  "AGENT.md"
  "Basic UI component style/single-nav-green-template.html"
  "Basic UI component style/Green Theme-Global Style.css"
  "Basic UI component style/Green Dark Theme-Global Style.css"
  "Basic UI component style/layout.md"
  "Basic UI component style/color.md"
  "Basic UI component style/shadow.md"
  "Basic UI component style/tokens.md"
  "Basic UI component style/typography.md"
  "Basic UI component style/component-styles/_index.txt"
  "Basic UI component style/component-styles/button.txt"
  "Basic UI component style/component-styles/input.txt"
  "Basic UI component style/component-styles/select.txt"
  "Basic UI component style/component-styles/table.txt"
  "Basic UI component style/component-styles/pagination.txt"
  "Basic UI component style/component-styles/data-metric-card.md"
  "Basic UI component style/component-styles/icon.md"
  "Interaction Construction Specifications/page-container.md"
  "Interaction Construction Specifications/permission-state.md"
  "Interaction Construction Specifications/list-page.md"
  "Interaction Construction Specifications/form-entry.md"
  "assets/iconfont/font_5177816_5ilr2y8ewpn.css"
  "assets/3Dicon/README.md"
  "assets/3Dicon/INDEX.md"
)

for file in "${required_files[@]}"; do
  if [[ -f "$file" ]]; then
    printf "OK   %s\n" "$file"
  else
    printf "MISS %s\n" "$file"
    missing=$((missing + 1))
  fi
done

print_section "2. Required directories"
required_dirs=(
  "Basic UI component style"
  "Basic UI component style/component-styles"
  "Interaction Construction Specifications"
  "assets/iconfont"
  "assets/3Dicon"
)

for dir in "${required_dirs[@]}"; do
  if [[ -d "$dir" ]]; then
    printf "OK   %s\n" "$dir"
  else
    printf "MISS %s\n" "$dir"
    missing=$((missing + 1))
  fi
done

print_section "3. Removed path guard"
for dir in "05-ai-image" "07-checklists" "templates" "references" "assets/3d-icons" "output-modes" "preview-assets" "Basic UI component style/component-styles/typography.md"; do
  if [[ -e "$dir" ]]; then
    printf "FAIL removed path still exists: %s\n" "$dir"
    missing=$((missing + 1))
  else
    printf "OK   removed path absent: %s\n" "$dir"
  fi
done

print_section "4. Legacy path scan"
if command -v rg >/dev/null 2>&1; then
  if find . \( -path "./05-ai-image" -o -path "./07-checklists" -o -path "./references" -o -path "./templates" -o -path "./assets/3d-icons" -o -path "./output-modes" -o -path "./preview-assets" \) -print | grep -q .; then
    printf "FAIL removed directory name still exists in tree\n"
    missing=$((missing + 1))
  else
    printf "OK   no removed directory remains in tree\n"
  fi
else
  printf "WARN rg not found; skip legacy text scan\n"
fi

print_section "5. Content consistency"
if command -v rg >/dev/null 2>&1; then
  text_scan_paths=(
    "SKILL.md"
    "AGENT.md"
    "README.md"
    "INDEX.md"
    "Basic UI component style"
    "Interaction Construction Specifications"
    "assets/README.md"
    "assets/3Dicon/README.md"
    "preview.html"
  )

  check_absent() {
    local label="$1"
    local pattern="$2"
    shift 2
    local output
    if output="$(rg -n -- "$pattern" "$@" 2>/dev/null)"; then
      printf "FAIL %s\n%s\n" "$label" "$output"
      missing=$((missing + 1))
    else
      printf "OK   %s\n" "$label"
    fi
  }

  check_absent "ordinary icons keep iconfont-only wording" "Lucide|lucide|data-lucide|lucide-react|unpkg\\.com/lucide|createIcons|@/components/icons|<[A-Z][A-Za-z]*Icon|[A-Z][A-Za-z]*Icon className|ArrowRightIcon|ItemLeadingIcon" "${text_scan_paths[@]}"
  check_absent "old iconfont version removed" "font_5177816_df7h6mjlznn" "${text_scan_paths[@]}"
  check_absent "drawer width no longer references 720px" "720px" "Interaction Construction Specifications/form-entry.md"
  check_absent "missing component docs are absent from component index" "date-picker\\.txt|dialog\\.txt" "Basic UI component style/component-styles/_index.txt"
  check_absent "docs use existing stable variables" "--color-primary|--color-bg-hover|--font-family-system|--color-text|--color-border|--color-success|--color-warning|--color-error|--color-info|--brand-|--ring|--card\\)|--destructive\\)|--disabled-foreground\\)|--foreground\\)|--input\\)|--input-disabled\\)|--muted\\)|--muted-foreground\\)|--popover\\)|--popover-foreground\\)|--popover-shadow\\)|--primary-foreground\\)|--surface-subtle\\)|--tertiary-foreground\\)" "${text_scan_paths[@]}"
  check_absent "component index avoids old token class names" "text-foreground|text-muted-foreground|text-tertiary-foreground|text-disabled-foreground|border-input|border-destructive|text-destructive|ring-ring|bg-background|bg-field-disabled|brand-green" "Basic UI component style/component-styles/_index.txt"
  check_absent "foundation docs stay HTML Demo oriented" "Vue|Ant Design|AI 生图 Prompt|工程代码生成|生成 Vue|HTML / Vue|Vue / HTML|AI / Vue" "Basic UI component style/tokens.md" "Basic UI component style/layout.md" "Basic UI component style/typography.md" "Basic UI component style/color.md" "Basic UI component style/component-styles/icon.md"
else
  printf "WARN rg not found; skip content consistency scan\n"
fi

if cmp -s "Basic UI component style/single-nav-green-template.html" "preview.html"; then
  printf "OK   preview matches single-nav-green-template.html\n"
else
  printf "FAIL preview.html differs from single-nav-green-template.html\n"
  missing=$((missing + 1))
fi

icon_count="$(find "assets/3Dicon" -maxdepth 1 -type f -name '*.png' | wc -l | tr -d ' ')"
index_count="$(grep -c '^- `' "assets/3Dicon/INDEX.md" || true)"
if [[ "$icon_count" = "$index_count" ]]; then
  printf "OK   3Dicon index covers %s png assets\n" "$icon_count"
else
  printf "FAIL 3Dicon index count mismatch: %s png assets, %s indexed names\n" "$icon_count" "$index_count"
  missing=$((missing + 1))
fi

print_section "6. Guidance"
printf "Use SKILL.md and INDEX.md as the active rule entry. Keep only one main spec path; 3Dicon is allowed only under assets/3Dicon for data metric cards.\n"

if [[ "$missing" -gt 0 ]]; then
  printf "\nFAIL %s required item(s) missing or invalid\n" "$missing"
  exit 1
fi

printf "\nPASS active spec structure is clean\n"
