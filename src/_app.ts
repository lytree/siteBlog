import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice';
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import Inplace from 'primevue/inplace';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import VirtualScroller from 'primevue/virtualscroller';

import 'virtual:uno.css'
import "@/styles/global.scss";
export default (app: App) => {
    app.use(PrimeVue, {
        unstyled: true,
        zIndex: {
            modal: 1100,        //dialog, drawer
            overlay: 1000,      //select, popover
            menu: 1000,         //overlay menus
            tooltip: 1100       //tooltip
        },
        pt: {
            button: {
                root: ({ instance, props }: any) => [
                    'p-button p-component',
                    {
                        'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
                        'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
                        'p-button-loading': props.loading,
                        'p-button-link': props.link,
                        [`p-button-${props.severity}`]: props.severity,
                        'p-button-raised': props.raised,
                        'p-button-rounded': props.rounded,
                        'p-button-text': props.text,
                        'p-button-outlined': props.outlined,
                        'p-button-sm': props.size === 'small',
                        'p-button-lg': props.size === 'large',
                        'p-button-plain': props.plain,
                        'p-button-fluid': instance.hasFluid
                    }
                ],
                loadingIcon: 'p-button-loading-icon',
                icon: ({ props }: any) => [
                    'p-button-icon',
                    {
                        [`p-button-icon-${props.iconPos}`]: props.label
                    }
                ],
                label: 'p-button-label'
            }, tabs: {
                root: 'p-tabs'
            },
            tab: {
                root: 'p-tab'
            },
            iconfield: {
                root: 'p-iconfield'
            },
            inputicon: {
                root: 'p-inputicon'
            },
            inputtext: {
                root: 'p-inputtext'
            },
            tablist: {
                root: 'p-tablist',
                content: 'p-tablist-content',
                tabList: 'p-tablist-tab-list',
                activeBar: 'p-tablist-active-bar',
                prevButton: 'p-tablist-prev-button',
                nextButton: 'p-tablist-next-button'
            },
            tabpanels: {
                root: 'p-tabpanels'
            },
            tabpanel: {
                root: 'p-tabpanel'
            },
            card: {
                root: 'p-card',
                header: 'p-card-header',
                body: 'p-card-body',
                caption: 'p-card-caption',
                title: 'p-card-title',
                subtitle: 'p-card-subtitle',
                content: 'p-card-content',
                footer: 'p-card-footer'
            }
        }
    });
    app.use(ToastService);
    app.use(DialogService);
    app.use(ConfirmationService);

    app.directive('tooltip', Tooltip);
    app.directive('badge', BadgeDirective);
    app.directive('ripple', Ripple);
    app.directive('styleclass', StyleClass);

    app.component('Accordion', Accordion);
    app.component('AutoComplete', AutoComplete);
    app.component('Avatar', Avatar);
    app.component('AvatarGroup', AvatarGroup);
    app.component('Badge', Badge);
    app.component('BlockUI', BlockUI);
    app.component('Breadcrumb', Breadcrumb);
    app.component('Button', Button);
    app.component('Card', Card);
    app.component('Carousel', Carousel);
    app.component('CascadeSelect', CascadeSelect);
    app.component('Checkbox', Checkbox);
    app.component('Chip', Chip);
    app.component('ColorPicker', ColorPicker);
    app.component('Column', Column);
    app.component('ColumnGroup', ColumnGroup);
    app.component('ConfirmDialog', ConfirmDialog);
    app.component('ConfirmPopup', ConfirmPopup);
    app.component('ContextMenu', ContextMenu);
    app.component('DataTable', DataTable);
    app.component('DataView', DataView);
    app.component('DeferredContent', DeferredContent);
    app.component('Dialog', Dialog);
    app.component('Divider', Divider);
    app.component('Dock', Dock);
    app.component('DynamicDialog', DynamicDialog);
    app.component('Fieldset', Fieldset);
    app.component('FileUpload', FileUpload);
    app.component('Galleria', Galleria);
    app.component('Image', Image);
    app.component('Inplace', Inplace);
    app.component('IconField', IconField);
    app.component("InputIcon", InputIcon);
    app.component('InputMask', InputMask);
    app.component('InputNumber', InputNumber);
    app.component('InputText', InputText);
    app.component('Knob', Knob);
    app.component('Listbox', Listbox);
    app.component('MegaMenu', MegaMenu);
    app.component('Menu', Menu);
    app.component('Menubar', Menubar);
    app.component('Message', Message);
    app.component('MultiSelect', MultiSelect);
    app.component('OrderList', OrderList);
    app.component('OrganizationChart', OrganizationChart);
    app.component('Paginator', Paginator);
    app.component('Panel', Panel);
    app.component('PanelMenu', PanelMenu);
    app.component('Password', Password);
    app.component('PickList', PickList);
    app.component('ProgressBar', ProgressBar);
    app.component('ProgressSpinner', ProgressSpinner);
    app.component('RadioButton', RadioButton);
    app.component('Rating', Rating);
    app.component('Row', Row);
    app.component('SelectButton', SelectButton);
    app.component('ScrollPanel', ScrollPanel);
    app.component('ScrollTop', ScrollTop);
    app.component('Slider', Slider);
    app.component('Skeleton', Skeleton);
    app.component('SpeedDial', SpeedDial);
    app.component('SplitButton', SplitButton);
    app.component('Splitter', Splitter);
    app.component('SplitterPanel', SplitterPanel);
    app.component('Steps', Steps);
    app.component('TabMenu', TabMenu);
    app.component('TabPanel', TabPanel);
    app.component('Tag', Tag);
    app.component('Textarea', Textarea);
    app.component('Terminal', Terminal);
    app.component('TieredMenu', TieredMenu);
    app.component('Timeline', Timeline);
    app.component('Toast', Toast);
    app.component('Toolbar', Toolbar);
    app.component('ToggleButton', ToggleButton);
    app.component('Tree', Tree);
    app.component('TreeSelect', TreeSelect);
    app.component('TreeTable', TreeTable);
    app.component('VirtualScroller', VirtualScroller);
    app.directive('removeAriaHidden', (el, binding) => {
        const ariaEls = el.querySelectorAll('.p-menubar-item-link')
        ariaEls.forEach((item: any) => {
            item.removeAttribute('aria-hidden')
        })

    })
};