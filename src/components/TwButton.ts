import { defineComponent, h, isVue2 } from 'vue-demi'
import '../assets/tailwind.css'

const TwButton = defineComponent({
  name: 'TwButton',
  props: {
    bg: {
      type: String,
      default: 'fill',
      validator: (value: string) => value === 'fill' || value === 'clear'
    },
    bordered: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flex: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    function renderV2() {
      return () =>
        h(
          'button',
          {
            class: {
              btn: true,
              'btn-flex': props.flex,
              'opacity-50 cursor-not-allowed': props.disabled,
              '!rounded-full': props.pill,
              'border': props.bordered,
              'border-dark': props.bordered && props.bg === 'clear',
              'border-primary-dark': props.bordered && props.bg === 'fill',
              'btn-clear': props.bg === 'clear',
              'btn-fill': props.bg === 'fill'
            },
            attrs: {
              disabled: props.disabled
            },
            on: { click: (event: Event) => emit('click', event) }
          },
          [
            h('span', { class: 'btn-contents' }, [
              props.icon
                ? h(
                    'span',
                    {
                      class: { 'icon material-icons': true, 'ml-[-2px] mr-1.5': slots.default }
                    },
                    props.icon
                  )
                : '',
              h('span', slots.default ? slots.default() : '')
            ])
          ]
        )
    }

    function renderV3() {
      return () =>
        h(
          'button',
          {
            disabled: props.disabled,
            class: {
              btn: true,
              'btn-flex': props.flex,
              'opacity-50 cursor-not-allowed': props.disabled,
              '!rounded-full': props.pill,
              'border': props.bordered,
              'border-dark': props.bordered && props.bg === 'clear',
              'border-primary-dark': props.bordered && props.bg === 'fill',
              'btn-clear': props.bg === 'clear',
              'btn-fill': props.bg === 'fill'
            },
            onClick: (event: Event) => emit('click', event)
          },
          [
            h('span', { class: 'btn-contents' }, [
              props.icon
                ? h(
                    'span',
                    {
                      class: {
                        'icon material-icons': true,
                        'ml-[-2px] mr-1.5': slots.default
                      }
                    },
                    props.icon
                  )
                : '',
              h('span', slots.default ? slots.default() : '')
            ])
          ]
        )
    }

    return isVue2 ? renderV2() : renderV3()
  }
})

export default TwButton
