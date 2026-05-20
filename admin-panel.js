/* =========================================================
   PREMIUM ADMIN PANEL INTERACTIVE SCRIPT — admin-panel.js
========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initGlobalFilters();
  initAnalyticsDefault();
});

/* ==========================================
   1. THEME TOGGLE SYSTEM
========================================== */
function initThemeSystem() {

  const themeBtn = document.querySelector('.theme-btn');

  if (!themeBtn) return;

  const icon = themeBtn.querySelector('i');

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {

    document.body.classList.add('light-mode');

    if (icon) {
      icon.className = 'fa-solid fa-sun';
    }

  } else {

    document.body.classList.remove('light-mode');

    if (icon) {
      icon.className = 'fa-solid fa-moon';
    }

  }

  themeBtn.addEventListener('click', () => {
<<<<<<< HEAD

    document.body.classList.toggle('light-mode');

    const isLight =
      document.body.classList.contains('light-mode');

    if (icon) {
      icon.className =
        isLight
          ? 'fa-solid fa-sun'
          : 'fa-solid fa-moon';
    }

    localStorage.setItem(
      'theme',
      isLight ? 'light' : 'dark'
    );

    showLiveToast(
      isLight
        ? 'Switched to Light Theme'
        : 'Switched to Premium Dark Theme',
      'success'
    );

=======
    const isLight = document.body.classList.toggle('light-mode');
    icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (typeof showLiveToast === 'function') showLiveToast(isLight ? 'Switched to Light Theme' : 'Switched to Premium Dark Theme', 'success');
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
  });

}

/* ==========================================
   2. COMPONENT CATEGORY FILTERS
========================================== */
function initGlobalFilters() {

  const filterTabs =
    document.querySelectorAll('.filter-tab');

  const cards =
    document.querySelectorAll('.component-card');

  filterTabs.forEach(tab => {

    tab.addEventListener('click', () => {

      filterTabs.forEach(t =>
        t.classList.remove('active')
      );

      tab.classList.add('active');

      const filterVal =
        tab.getAttribute('data-filter');

      cards.forEach(card => {

        const category =
          card.getAttribute('data-category');

        const shouldShow =
          filterVal === 'all' ||
          category === filterVal;

        card.style.display =
          shouldShow ? 'block' : 'none';

      });

    });

  });

}

/* ==========================================
   3. DASHBOARD LAYOUT SWITCHER
========================================== */
function switchMockLayout(layout) {

  const mockDesktop =
    document.getElementById('mockDesktop');

  if (!mockDesktop) return;

  mockDesktop.className = 'mock-desktop';

  mockDesktop.classList.add(`layout-${layout}`);

  const buttons =
    document.querySelectorAll('.layout-toggle-btn');

  buttons.forEach(btn => {

    const clickAttr =
      btn.getAttribute('onclick') || '';

    btn.classList.toggle(
      'active',
      clickAttr.includes(layout)
    );

  });

<<<<<<< HEAD
  showLiveToast(
    `Switched framework layout to: ${layout.toUpperCase()}`,
    'success'
  );

=======
  if (typeof showLiveToast === 'function') showLiveToast(`Switched framework layout to: ${layout.toUpperCase()}`, 'success');
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
}

function triggerLayoutGlow() {

  const mockDesktop =
    document.getElementById('mockDesktop');

  if (!mockDesktop) return;

  mockDesktop.style.boxShadow =
    '0 0 35px var(--color-orange)';

  setTimeout(() => {
    mockDesktop.style.boxShadow = '';
  }, 1000);

}

/* ==========================================
   4. TELEMETRY ANALYTICS
========================================== */
const dataPeriodSet = {

  '24h': {
    doughnutVal: 85,
    bars: [60, 80, 45, 95],
    pathArea:
      'M 0 100 L 0 50 Q 50 20 100 60 T 200 30 T 300 40 L 300 100 Z',
    pathLine:
      'M 0 50 Q 50 20 100 60 T 200 30 T 300 40'
  },

  '7d': {
    doughnutVal: 54,
    bars: [30, 95, 75, 40],
    pathArea:
      'M 0 100 L 0 80 Q 50 40 100 30 T 200 65 T 300 15 L 300 100 Z',
    pathLine:
      'M 0 80 Q 50 40 100 30 T 200 65 T 300 15'
  },

  '30d': {
    doughnutVal: 92,
    bars: [95, 40, 85, 80],
    pathArea:
      'M 0 100 L 0 20 Q 50 90 100 10 T 200 40 T 300 35 L 300 100 Z',
    pathLine:
      'M 0 20 Q 50 90 100 10 T 200 40 T 300 35'
  }

};

function initAnalyticsDefault() {
  updateAnalyticsPeriod('24h');
}

function updateAnalyticsPeriod(period) {

  const dataset = dataPeriodSet[period];

  if (!dataset) return;

  const buttons =
    document.querySelectorAll('.period-btn');

  buttons.forEach(btn => {

    const clickAttr =
      btn.getAttribute('onclick') || '';

    btn.classList.toggle(
      'active',
      clickAttr.includes(period)
    );

  });

  const chartAreaPath =
    document.getElementById('chartAreaPath');

  const chartLinePath =
    document.getElementById('chartLinePath');

  if (chartAreaPath) {
    chartAreaPath.setAttribute('d', dataset.pathArea);
  }

  if (chartLinePath) {
    chartLinePath.setAttribute('d', dataset.pathLine);
  }

  dataset.bars.forEach((heightVal, idx) => {

    const bar =
      document.getElementById(`bar-metric-${idx + 1}`);

    if (bar) {
      bar.style.height = `${heightVal}%`;
    }

  });

  const doughnutCircle =
    document.getElementById('doughnutCircle');

  const doughnutValue =
    document.getElementById('doughnutValue');

  if (doughnutCircle) {
    doughnutCircle.style.strokeDasharray =
      `${dataset.doughnutVal}, 100`;
  }

<<<<<<< HEAD
  if (doughnutValue) {
    doughnutValue.textContent =
      `${dataset.doughnutVal}%`;
  }

  showLiveToast(
    `Updated metrics data for period: ${period.toUpperCase()}`,
    'success'
  );

=======
  if (typeof showLiveToast === 'function') showLiveToast(`Updated metrics data for period: ${period.toUpperCase()}`, 'success');
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
}

function triggerMetricPulse() {

  const bars =
    document.querySelectorAll('.column-bar-group .col-bar');

  bars.forEach(bar => {

    bar.style.transform = 'scaleY(1.3)';

    setTimeout(() => {
      bar.style.transform = '';
    }, 400);

  });

}

/* ==========================================
   5. SIDEBAR COLLAPSE
========================================== */
function toggleMiniSidebarCollapse() {

  const sidebar =
    document.getElementById('miniSidebar');

  const chevron =
    document.getElementById('miniChevron');

  if (!sidebar) return;

  sidebar.classList.toggle('collapsed');

  const isCollapsed =
    sidebar.classList.contains('collapsed');

  if (chevron) {

    chevron.className =
      isCollapsed
        ? 'fa-solid fa-chevron-right'
        : 'fa-solid fa-chevron-left';

  }

<<<<<<< HEAD
  showLiveToast(
    isCollapsed
      ? 'Sidebar Collapsed (Space-Saver)'
      : 'Sidebar Expanded',
    'success'
  );

}

function switchMiniSidebarLink(elem) {

  const links =
    document.querySelectorAll('.mini-sidebar-menu li');

  links.forEach(link =>
    link.classList.remove('active')
  );

  if (elem.parentNode) {
    elem.parentNode.classList.add('active');
  }

  const text =
    elem.querySelector('span')?.textContent || 'Section';

  showLiveToast(
    `Opened section: ${text}`,
    'success'
  );

=======
  if (typeof showLiveToast === 'function') showLiveToast(isCollapsed ? 'Sidebar Collapsed (Space-Saver)' : 'Sidebar Expanded', 'success');
}

function switchMiniSidebarLink(elem) {
  const links = document.querySelectorAll('.mini-sidebar-menu li');
  links.forEach(l => l.classList.remove('active'));
  elem.parentNode.classList.add('active');
  const txt = elem.querySelector('span').textContent;
  if (typeof showLiveToast === 'function') showLiveToast(`Opened section: ${txt}`, 'success');
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
}

/* ==========================================
   6. KPI STATISTICS
========================================== */
function kpiCardSpotlight(event, element) {

  const rect =
    element.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  element.style.setProperty('--x', `${x}px`);
  element.style.setProperty('--y', `${y}px`);

}

function simulateKpiBounce() {

  const counters =
    document.querySelectorAll('.kpi-card-value');

  counters.forEach(counter => {

    const numeric =
      parseInt(
        counter.textContent.replace(/[^0-9]/g, ''),
        10
      );

    if (isNaN(numeric)) return;

    const updated =
      Math.floor(
        numeric * (0.95 + Math.random() * 0.1)
      );

    counter.style.transform =
      'translateY(-5px)';

    setTimeout(() => {

      counter.textContent =
        counter.textContent.startsWith('$')
          ? `$${updated.toLocaleString()}`
          : updated.toLocaleString();

      counter.style.transform = '';

    }, 300);

  });
<<<<<<< HEAD

  showLiveToast(
    'KPI Telemetry Counters Refreshed',
    'success'
  );

=======
  if (typeof showLiveToast === 'function') showLiveToast('KPI Telemetry Counters Refreshed', 'success');
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
}

/* ==========================================
   7. USER DIRECTORY
========================================== */
function filterUserDirectoryTable() {

  const input =
    document.getElementById('userTableSearch');

  if (!input) return;

  const query =
    input.value.toLowerCase();

  const rows =
    document.querySelectorAll(
      '#user-directory-table tbody tr'
    );

  let matchCount = 0;

  rows.forEach(row => {

    const name =
      row.querySelector('.td-profile-info strong')
        ?.textContent
        .toLowerCase() || '';

    const email =
      row.querySelector('.td-profile-info span')
        ?.textContent
        .toLowerCase() || '';

    const role =
      row.querySelector('.td-role-badge')
        ?.textContent
        .toLowerCase() || '';

    const matched =
      name.includes(query) ||
      email.includes(query) ||
      role.includes(query);

    row.style.display =
      matched ? '' : 'none';

    if (matched) {
      matchCount++;
    }

  });

  const badge =
    document.getElementById('tableRecordsCount');

  if (badge) {
    badge.textContent =
      `${matchCount} active records`;
  }

}

function toggleAllUserCheckboxes(masterCheckbox) {

  const checkboxes =
    document.querySelectorAll('.user-row-checkbox');

  checkboxes.forEach(chk => {
    chk.checked = masterCheckbox.checked;
  });

}

function toggleUserRowStatus(btn) {

  const tr = btn.closest('tr');

  if (!tr) return;

  const statusSpan =
    tr.querySelector('.td-status');

  if (!statusSpan) return;

  const isActive =
    statusSpan.classList.contains('active');

  if (isActive) {

    statusSpan.className = 'td-status paused';
    statusSpan.textContent = 'Paused';
<<<<<<< HEAD

    showLiveToast(
      'User Account Suspended',
      'warning'
    );

=======
    if (typeof showLiveToast === 'function') showLiveToast('User Account Suspended', 'warning');
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
  } else {

    statusSpan.className = 'td-status active';
    statusSpan.textContent = 'Active';
<<<<<<< HEAD

    showLiveToast(
      'User Account Restored',
      'success'
    );

=======
    if (typeof showLiveToast === 'function') showLiveToast('User Account Restored', 'success');
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
  }

}

<<<<<<< HEAD
/* ==========================================
   8. CODE & CLIPBOARD
========================================== */
=======
function simulateUserAddition() {
  const tableBody = document.querySelector('#user-directory-table tbody');
  if (!tableBody) return;

  const names = ['Evelyn Reed', 'Daniel Craig', 'Klaus Mikaelson', 'Diana Prince'];
  const emails = ['ereed@uiverse.io', 'dcraig@uiverse.io', 'klaus@uiverse.io', 'diana@uiverse.io'];
  const roles = ['operator', 'reviewer'];
  const avatarIds = [44, 21, 62, 59];

  const randomIdx = Math.floor(Math.random() * names.length);
  const selectedRole = roles[Math.floor(Math.random() * roles.length)];

  const tr = document.createElement('tr');
  tr.className = 'user-row';
  tr.innerHTML = `
    <td>
      <div class="td-checkbox-wrap">
        <input type="checkbox" class="user-row-checkbox">
      </div>
    </td>
    <td>
      <div class="td-profile-box">
        <img src="https://i.pravatar.cc/100?img=${avatarIds[randomIdx]}" alt="avatar" class="td-avatar">
        <div class="td-profile-info">
          <strong>${names[randomIdx]}</strong>
          <span>${emails[randomIdx]}</span>
        </div>
      </div>
    </td>
    <td><span class="td-role-badge ${selectedRole}">${selectedRole.toUpperCase()}</span></td>
    <td><span class="td-status active">Active</span></td>
    <td>
      <button type="button" class="td-action-icon-btn" onclick="toggleUserRowStatus(this)"><i class="fa-solid fa-power-off"></i> Toggle</button>
    </td>
  `;

  tableBody.appendChild(tr);
  filterUserDirectoryTable();
  if (typeof showLiveToast === 'function') showLiveToast(`Added operator row: ${names[randomIdx]}`, 'success');
}

// ==========================================
// 8. CODE DISPLAY & CLIPBOARD UTILS
// ==========================================
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
function toggleCode(id) {

  const pre =
    document.getElementById(id);

  if (!pre) return;

  const isHidden =
    pre.style.display === 'none' ||
    pre.style.display === '';

  pre.style.display =
    isHidden ? 'block' : 'none';

  if (isHidden) {

    pre.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });

  }

}

async function copyCode(id) {

  const pre =
    document.getElementById(id);

  if (!pre) return;

<<<<<<< HEAD
  const code =
    pre.querySelector('code');

  if (!code) {
    showLiveToast(
      'Code block not found.',
      'error'
    );
    return;
  }

  try {

    await navigator.clipboard.writeText(
      code.textContent
    );

    showLiveToast(
      'Source code copied to clipboard!',
      'success'
    );

  } catch (error) {

    showLiveToast(
      'Copy failed, please retry.',
      'error'
    );

  }

=======
  const rawCode = pre.querySelector('code').textContent;
  navigator.clipboard.writeText(rawCode).then(() => {
    if (typeof showLiveToast === 'function') showLiveToast('Source code copied to clipboard!', 'success');
  }).catch(() => {
    if (typeof showLiveToast === 'function') showLiveToast('Copy failed, please retry.', 'error');
  });
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
}

/* ==========================================
   9. PREMIUM TOAST SYSTEM
========================================== */
function showLiveToast(message, type = 'success') {

  let container =
    document.querySelector('.live-toast-container');

  if (!container) {

    container =
      document.createElement('div');

    container.className =
      'live-toast-container';

    document.body.appendChild(container);

  }

  const toast =
    document.createElement('div');

  toast.className =
    `premium-toast ${type}`;

  const iconClass =
    type === 'success'
      ? 'fa-solid fa-circle-check'
      : (
          type === 'warning'
            ? 'fa-solid fa-circle-exclamation'
            : 'fa-solid fa-circle-xmark'
        );

  toast.innerHTML = `
    <div class="toast-icon">
      <i class="${iconClass}"></i>
    </div>

    <div class="toast-content">
      <div class="toast-title">
        ${type.toUpperCase()} Notification
      </div>

      <div class="toast-desc">
        ${message}
      </div>
    </div>

    <button
      type="button"
      class="toast-close-btn"
      aria-label="Close Toast"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>

    <div class="toast-progress-bar"></div>
  `;

  const closeBtn =
    toast.querySelector('.toast-close-btn');

  closeBtn?.addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  setTimeout(() => {

    toast.style.animation =
      'toastSlideOut 0.4s ease forwards';

    setTimeout(() => {
      toast.remove();
    }, 400);

  }, 4000);

}

/* ==========================================
   10. SHOWCASE TEST
========================================== */
function triggerAllShowcase() {
<<<<<<< HEAD

  showLiveToast(
    'Commencing Sequenced Showcase Diagnostics...',
    'success'
  );

=======
  if (typeof showLiveToast === 'function') showLiveToast('Commencing Sequenced Showcase Diagnostics...', 'success');
  
  // Step 1: Layout toggle
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
  setTimeout(() => {
    switchMockLayout('glass');
  }, 1000);

  setTimeout(() => {
    updateAnalyticsPeriod('7d');
  }, 2200);

  setTimeout(() => {
    toggleMiniSidebarCollapse();
  }, 3400);

  setTimeout(() => {
    simulateKpiBounce();
  }, 4600);

  setTimeout(() => {
    simulateUserAddition();
  }, 5800);

}

function resetAllPanels() {

  switchMockLayout('split');

  updateAnalyticsPeriod('24h');

  const miniSidebar =
    document.getElementById('miniSidebar');

  if (
    miniSidebar &&
    miniSidebar.classList.contains('collapsed')
  ) {
    toggleMiniSidebarCollapse();
  }
<<<<<<< HEAD

  showLiveToast(
    'All premium dashboards reset to baseline.',
    'success'
  );

}
=======
  
  if (typeof showLiveToast === 'function') showLiveToast('All premium dashboards reset to baseline.', 'success');
}
>>>>>>> eccf14e1002113203ac4f66d353ffc4617527b71
