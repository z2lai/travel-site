import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import { particles } from './modules/particles';
import { config } from './modules/particlesjs-config';

particles('particles-js', config);
var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll();