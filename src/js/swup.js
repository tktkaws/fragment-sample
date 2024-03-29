console.clear();
// import Swup from 'https://unpkg.com/swup@4?module';
// import FragmentPlugin from 'https://www.unpkg.com/@swup/fragment-plugin@1?module';

import Swup from 'swup';

import FragmentPlugin from '@swup/fragment-plugin';

const swup = new Swup({
  containers: ["#swup"],
  plugins: [
    new FragmentPlugin({
      debug: true,
      rules: [
        {
          from: '/items/:filter?',
          to: '/items/:filter?',
          containers: ['#items'],
        }
      ]
    })
  ]
});

function setTransitionDelays() {
  document.querySelectorAll('.list_item').forEach((el, i) => {
    el.style.transitionDelay = i * 20 + 'ms';
  });
}
setTransitionDelays();
swup.hooks.on('page:view', setTransitionDelays)