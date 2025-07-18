import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Dropzone,
  Tooltip,
  Theme,
} from '@spectrum-web-components/bundle';
import { Textfield } from '@spectrum-web-components/textfield';
// 테마
import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/scale-large.js';
// 웹 컴포넌트 등록 함수
import { applyCustomElements } from "./utils/applyCustomElements.ts";

const elementsList = {
  'ui-button': Button,
  'ui-button-group': ButtonGroup,
  'ui-checkbox': Checkbox,
  'ui-theme': Theme,
  'ui-divider': Divider,
  'ui-dropzone': Dropzone,
  'ui-tooltip': Tooltip,
  'ui-textfield': Textfield,
}
applyCustomElements(elementsList);
