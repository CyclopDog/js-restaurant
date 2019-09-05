/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import { canvasSetup } from './canvas';
import { tabMenuSetup, navigation } from './tabmenu';
import { pageHome } from './home';

tabMenuSetup();
canvasSetup();
navigation();
pageHome();
