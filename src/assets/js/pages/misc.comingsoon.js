class ComingSoon{constructor(){this._initCountdown()}_initCountdown(){if("undefined"!=typeof Countdown){var i=new Date((new Date).setMinutes((new Date).getMinutes()+5e3));new Countdown({selector:"#timer",leadingZeros:!0,msgBefore:"",msgAfter:"",msgPattern:'\n                      <div class="row g-2">\n                          <div class="col-3">\n                              <div class="display-5 text-primary mb-1">{days}</div>\n                              <div>Days</div>\n                          </div>\n                          <div class="col-3">\n                              <div class="display-5 text-primary mb-1">{hours}</div>\n                              <div>Hours</div>\n                          </div>\n                          <div class="col-3">\n                              <div class="display-5 text-primary mb-1">{minutes}</div>\n                              <div>Minutes</div>\n                          </div>\n                          <div class="col-3">\n                              <div class="display-5 text-primary mb-1">{seconds}</div>\n                              <div>Seconds</div>\n                          </div>\n                      </div>',dateEnd:i})}}}