"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[46214],{852408:(e,t,i)=>{i.r(t),i.d(t,{data:()=>c});const c=JSON.parse('{"key":"v-7277a45d","path":"/devices/545D6306.html","title":"Schneider Electric 545D6306 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric 545D6306 control via MQTT","description":"Integrate your Schneider Electric 545D6306 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance_lux (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Occupancy_timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1670250384000},"filePathRelative":"devices/545D6306.md"}')},861817:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var c=i(166252);const n=(0,c._)("h1",{id:"schneider-electric-545d6306",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#schneider-electric-545d6306","aria-hidden":"true"},"#"),(0,c.Uk)(" Schneider Electric 545D6306")],-1),o=(0,c._)("thead",null,[(0,c._)("tr",null,[(0,c._)("th"),(0,c._)("th")])],-1),a=(0,c._)("tr",null,[(0,c._)("td",null,"Model"),(0,c._)("td",null,"545D6306")],-1),l=(0,c._)("td",null,"Vendor",-1),u=(0,c._)("tr",null,[(0,c._)("td",null,"Description"),(0,c._)("td",null,"LK FUGA Wiser wireless PIR with relay")],-1),d=(0,c._)("tr",null,[(0,c._)("td",null,"Exposes"),(0,c._)("td",null,"switch (state), occupancy, illuminance_lux, illuminance, occupancy_timeout, linkquality")],-1),s=(0,c._)("tr",null,[(0,c._)("td",null,"Picture"),(0,c._)("td",null,[(0,c._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/545D6306.jpg",alt:"Schneider Electric 545D6306"})])],-1),r=(0,c._)("h2",{id:"options",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,c.Uk)(" Options")],-1),h=(0,c.uE)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric" aria-hidden="true">#</a> Occupancy_timeout (numeric)</h3><p>Time in seconds after which occupancy is cleared after detecting it. Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>second</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),p={},m=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,c.up)("RouterLink");return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.kq)(" !!!! "),(0,c.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,c.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,c.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,c.kq)(" !!!! "),n,(0,c._)("table",null,[o,(0,c._)("tbody",null,[a,(0,c._)("tr",null,[l,(0,c._)("td",null,[(0,c.Wm)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,c.w5)((()=>[(0,c.Uk)("Schneider Electric")])),_:1})])]),u,d,s])]),(0,c.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,c.kq)(" Notes END: Do not edit below this line "),r,(0,c._)("p",null,[(0,c._)("em",null,[(0,c.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,c.w5)((()=>[(0,c.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);