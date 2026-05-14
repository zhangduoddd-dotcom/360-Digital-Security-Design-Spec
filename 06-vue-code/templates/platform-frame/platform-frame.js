const config = window.PLATFORM_FRAME_CONFIG || {};
const icons = config.icons || {};
const topNavData = config.topNavData || [];
const menuData = config.menuData || [];
let activeTop = config.defaultActiveTop || (topNavData.find(item => item.active) || topNavData[0] || {}).id;
let activeMenu = config.defaultActiveMenu || 'log-access';

const frame = document.getElementById('frame');
const topNav = document.getElementById('topNav');
const sidebar = document.getElementById('sidebar');
const pageTitle = document.getElementById('pageTitle');
const collapseBtn = document.getElementById('collapseBtn');

function hasChildren(item) {
  return item.children && item.children.length > 0;
}

function findItemById(items, id) {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.children) {
      const result = findItemById(item.children, id);
      if (result) return result;
    }
  }
  return null;
}

function renderTopNav() {
  topNav.innerHTML = topNavData.map(item => `
    <a class="top-nav-item ${item.id === activeTop ? 'active' : ''}" data-top-id="${item.id}">
      <span class="top-nav-item-inner">
        <span>${item.label}</span>
        ${item.children ? `<img class="top-nav-arrow-icon" src="${icons.arrowDown || './asset/icons/svg_c4750d0b.svg'}" alt="" />` : ''}
      </span>
    </a>
  `).join('');

  topNav.querySelectorAll('.top-nav-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.topId;
      const item = topNavData.find(nav => nav.id === id);
      activeTop = id;
      document.querySelectorAll('.top-nav-dropdown').forEach(d => d.remove());
      document.querySelectorAll('.top-nav-item.open').forEach(open => open.classList.remove('open'));

      if (item && item.children) {
        const rect = el.getBoundingClientRect();
        const dropdown = document.createElement('div');
        dropdown.className = 'top-nav-dropdown visible';
        dropdown.style.left = rect.left + 'px';
        dropdown.innerHTML = item.children.map((child, index) => `
          <div class="top-dropdown-option ${index === 0 ? 'active' : ''}">${child}</div>
        `).join('');
        document.body.appendChild(dropdown);
        el.classList.add('open');
      }
      renderTopNav();
    });
  });
}

function renderMenuItems(items, level = 1) {
  return items.map(item => {
    const children = hasChildren(item);
    const expanded = item.expanded;
    const active = item.id === activeMenu;
    const disabled = item.disabled;
    return `
      <div class="menu-node ${children && expanded ? 'is-expanded' : ''}" data-node-id="${item.id}">
        <div class="menu-row" data-cascade-root="${level === 1 ? item.id : ''}">
          <button class="menu-item level-${level} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}" type="button" data-menu-id="${item.id}" ${disabled ? 'disabled' : ''}>
            <span class="menu-item-main">
              ${level === 1 ? `<img class="menu-icon" src="${item.icon || icons.defaultMenu || './asset/icons/svg_1f7be3ff.svg'}" alt="" />` : ''}
              <span class="menu-label">${item.label}</span>
            </span>
            ${children ? `<span class="menu-toggle" data-toggle-id="${item.id}" aria-label="展开收起"><img class="menu-arrow-icon" src="${icons.arrowDown || './asset/icons/svg_c4750d0b.svg'}" alt="" /></span>` : ''}
          </button>
        </div>
        ${children ? `<div class="children">${renderMenuItems(item.children, level + 1)}</div>` : ''}
      </div>
    `;
  }).join('');
}

function renderSidebar() {
  sidebar.innerHTML = renderMenuItems(menuData);
  bindSidebarEvents();
  updateTitle();
}

function bindSidebarEvents() {
  sidebar.querySelectorAll('[data-menu-id]').forEach(btn => {
    btn.addEventListener('click', event => {
      const id = btn.dataset.menuId;
      const item = findItemById(menuData, id);
      if (!item || item.disabled) return;

      if (event.target.closest('[data-toggle-id]')) {
        event.stopPropagation();
        item.expanded = !item.expanded;
        renderSidebar();
        return;
      }

      if (!hasChildren(item)) {
        activeMenu = id;
        renderSidebar();
      } else if (!frame.classList.contains('sidebar-collapsed')) {
        item.expanded = !item.expanded;
        renderSidebar();
      }
    });
  });

  sidebar.querySelectorAll('[data-cascade-root]').forEach(row => {
    row.addEventListener('mouseenter', () => {
      if (!frame.classList.contains('sidebar-collapsed')) return;
      const id = row.dataset.cascadeRoot;
      if (!id) return;
      const root = findItemById(menuData, id);
      if (!root || root.disabled) return;
      showCascade(root.children || [root], row.getBoundingClientRect().top, 56, 1);
    });
  });
}

function showCascade(items, top, left, level) {
  removeCascadeLayers(level);
  if (!items || !items.length) return;

  const layer = document.createElement('div');
  layer.className = 'cascade-layer visible';
  layer.dataset.cascadeLevel = String(level);
  layer.style.setProperty('--layer-top', top + 'px');
  layer.style.setProperty('--layer-left', left + 'px');

  layer.innerHTML = items.map(item => `
    <div class="cascade-option ${item.id === activeMenu ? 'active' : ''}" data-cascade-id="${item.id}">
      <span>${item.label}</span>
    </div>
  `).join('');

  document.body.appendChild(layer);

  layer.querySelectorAll('.cascade-option').forEach(option => {
    const id = option.dataset.cascadeId;
    const item = findItemById(menuData, id);
    option.addEventListener('mouseenter', () => {
      const rect = option.getBoundingClientRect();
      if (item && item.children) {
        showCascade(item.children, rect.top, rect.right + 8, level + 1);
      } else {
        removeCascadeLayers(level + 1);
      }
    });
    option.addEventListener('click', event => {
      event.stopPropagation();
      if (item && !item.children && !item.disabled) {
        activeMenu = id;
        renderSidebar();
        removeCascadeLayers(1);
      }
    });
  });
}

function removeCascadeLayers(fromLevel = 1) {
  document.querySelectorAll('.cascade-layer').forEach(layer => {
    const level = Number(layer.dataset.cascadeLevel || '1');
    if (level >= fromLevel) layer.remove();
  });
}

function updateTitle() {
  const active = findItemById(menuData, activeMenu);
  if (active) pageTitle.textContent = active.label;
}

collapseBtn.addEventListener('click', () => {
  frame.classList.toggle('sidebar-collapsed');
  removeCascadeLayers(1);
});

function renderTopPopovers() {
  const data = config.topPopovers || {};
  Object.keys(data).forEach(id => {
    const popover = document.getElementById(id);
    if (!popover) return;
    popover.innerHTML = data[id].map(text => `<div class="top-popover-option">${text}</div>`).join('');
  });
}

function applyTopStatus() {
  const status = config.topStatus || {};
  const statusText = document.getElementById('topStatusText');
  const statusDays = document.getElementById('topStatusDays');
  const userName = document.getElementById('topUserName');
  if (statusText) statusText.textContent = status.text || '360全网安全大脑高效赋能';
  if (statusDays) statusDays.textContent = String(status.days || 328);
  if (userName) userName.textContent = status.userName || '超级管理员';
}

document.addEventListener('mousemove', event => {
  if (!frame.classList.contains('sidebar-collapsed')) return;
  const inSidebar = event.target.closest('.platform-sidebar');
  const inCascade = event.target.closest('.cascade-layer');
  if (!inSidebar && !inCascade) removeCascadeLayers(1);
});

document.addEventListener('click', event => {
  if (!event.target.closest('.top-nav-item') && !event.target.closest('.top-nav-dropdown')) {
    document.querySelectorAll('.top-nav-dropdown').forEach(d => d.remove());
    document.querySelectorAll('.top-nav-item.open').forEach(open => open.classList.remove('open'));
  }
  if (!event.target.closest('[data-top-popover]') && !event.target.closest('.top-popover')) {
    document.querySelectorAll('.top-popover.visible').forEach(p => p.classList.remove('visible'));
    document.querySelectorAll('[data-top-popover].open').forEach(o => o.classList.remove('open'));
  }
});

document.querySelectorAll('[data-top-popover]').forEach(trigger => {
  trigger.addEventListener('click', event => {
    event.stopPropagation();
    const id = trigger.dataset.topPopover;
    const popover = document.getElementById(id);
    const visible = popover.classList.contains('visible');

    document.querySelectorAll('.top-popover.visible').forEach(p => p.classList.remove('visible'));
    document.querySelectorAll('[data-top-popover].open').forEach(o => o.classList.remove('open'));

    if (!visible) {
      const rect = trigger.getBoundingClientRect();
      popover.style.left = Math.max(8, rect.right - 156) + 'px';
      popover.classList.add('visible');
      trigger.classList.add('open');
    }
  });
});

applyTopStatus();
renderTopPopovers();
renderTopNav();
renderSidebar();