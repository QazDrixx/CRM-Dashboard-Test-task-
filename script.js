const Sidebartrigger = document.querySelector('.Sidebar-trigger')
const Sidebar = document.querySelector('.Sidebar')

let isOpen = false
Sidebartrigger.addEventListener('click', () => {
    if (!isOpen) {
        Sidebartrigger.classList.add('triggerOpen')
        Sidebar.classList.replace('Sidebar-close', 'Sidebar-open')
        isOpen = true
    } else {
        Sidebartrigger.classList.remove('triggerOpen')
        Sidebar.classList.replace('Sidebar-open', 'Sidebar-close')
        isOpen = false
    }

})