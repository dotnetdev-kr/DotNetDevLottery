import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Dropzone,
  Tooltip,
  Theme,
} from '@spectrum-web-components/bundle';

window.customElements.define(
  'ui-button',
  Button
);

window.customElements.define(
  'ui-button-group',
  ButtonGroup
);
window.customElements.define(
  'ui-checkbox',
  Checkbox
);
window.customElements.define(
  'ui-theme',
  Theme
);
window.customElements.define(
  'ui-divider',
  Divider
);
window.customElements.define(
  'ui-dropzone',
  Dropzone
);
window.customElements.define(
  'ui-tooltip',
  Tooltip
);
import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/scale-large.js';
