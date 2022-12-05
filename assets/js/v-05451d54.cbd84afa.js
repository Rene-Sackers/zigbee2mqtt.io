"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61502],{868169:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-05451d54","path":"/devices/404002.html","title":"Müller Licht 404002 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Müller Licht 404002 control via MQTT","description":"Integrate your Müller Licht 404002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-30T11:31:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1670250384000},"filePathRelative":"devices/404002.md"}')},224683:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var n=i(166252);const a=(0,n._)("h1",{id:"muller-licht-404002",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#muller-licht-404002","aria-hidden":"true"},"#"),(0,n.Uk)(" Müller Licht 404002")],-1),l=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"404002")],-1),o=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Tint dim remote control")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"action, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/404002.jpg",alt:"Müller Licht 404002"})])],-1),u=(0,n._)("h2",{id:"notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Notes")],-1),h=(0,n._)("h3",{id:"pairing",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),p=(0,n._)("p",null,"Press the small reset button (at backside of the remote at the lower part of the battery lid) e.g. with a pin for about 4 seconds. The device will reset and try to join a network. The LED is switched on during the pairing process. If pairing fails it might work after repeating this procedure and lowering the distance to your Zigbee adapter.",-1),g=(0,n._)("p",null,'Pairing directly to a nearby (distance ca. 5 cm) Müller Licht Tint bulb is possible by holding down the "power" and "dim down" buttons until the LED starts blinking.',-1),m=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),b=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>recall_1</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),v={},_=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[l,(0,n._)("tbody",null,[s,(0,n._)("tr",null,[o,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=M%C3%BCller%20Licht"},{default:(0,n.w5)((()=>[(0,n.Uk)("Müller Licht")])),_:1})])]),d,r,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,g,(0,n.kq)(" Notes END: Do not edit below this line "),m,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);