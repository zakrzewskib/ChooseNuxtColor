(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{216:function(e,t,o){var content=o(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(119).default)("4f6449f0",content,!0,{sourceMap:!1})},228:function(e,t,o){"use strict";o(216)},229:function(e,t,o){var n=o(118)(!1);n.push([e.i,".message[data-v-10f5db70]{display:flex;grid-gap:.8rem;gap:.8rem;align-items:center}.message-wrong[data-v-10f5db70]{flex-direction:column}button[data-v-10f5db70]{background:none!important;border:none;padding:0!important;font-weight:500;font-family:inherit;text-decoration:underline;font-size:2.4rem;color:#862e9c;cursor:pointer}",""]),e.exports=n},238:function(e,t,o){"use strict";o.r(t);var n={props:["correctColor","guessedWrong","guessedColor"],methods:{nextGuess:function(){this.$emit("next-guess")}}},r=(o(228),o(37)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.correctColor?o("div",{staticClass:"message"},[o("p",[e._v("GJ ✌")]),e._v(" "),o("button",{on:{click:e.nextGuess}},[e._v("Next Guess")])]):e.guessedWrong?o("div",{staticClass:"message message-wrong"},[o("p",[e._v("\n    You guessed wrong! -\n    "),o("span",{style:{color:e.guessedColor}},[e._v(e._s(e.guessedColor))])])]):o("div",{staticClass:"message"},[o("p",[e._v("Waiting for your guess...")])])}),[],!1,null,"10f5db70",null);t.default=component.exports}}]);