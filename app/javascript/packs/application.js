// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import { initMap } from '../plugins/google-maps';

Rails.start()
Turbolinks.start()
ActiveStorage.start()
window.WOW = require('wowjs').WOW;

require("jquery")
require("../plugins/bootstrap.bundle.min")
require("../plugins/wow.min")
require("../plugins/owl.carousel.min")
require("../plugins/mobster")
require("../plugins/google-maps")


import "controllers"
import "bootstrap"

document.addEventListener('turbolinks:load', () => {
  initMap();
});
