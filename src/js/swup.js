console.clear();
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
        },
        {
          from: "/characters/:filter?",
          to: "/characters/:filter?",
          containers: ["#characters-list"],
        },
        {
          from: "/",
          to: "/characters/:filter?",
          containers: ["#characters-list"],
        },
        {
          from: "/characters/:filter?",
          to: "/",
          containers: ["#characters-list"],
        },
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