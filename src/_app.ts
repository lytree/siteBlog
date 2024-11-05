import type { App } from 'vue';

export default (app: App) => {
    app.directive('removeAriaHidden', (el, binding) => {
        const ariaEls = el.querySelectorAll('.p-menubar-item-link')
        ariaEls.forEach((item: any) => {
            item.removeAttribute('aria-hidden')
        })

    })
};