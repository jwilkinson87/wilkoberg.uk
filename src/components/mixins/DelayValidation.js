const touchMap = new WeakMap()

export default {
	methods: {
		delayTouch($v) {
			$v.$reset()

			if (touchMap.has($v)) {
				clearTimeout(touchMap.get($v))
			}

			touchMap.set($v, setTimeout($v.touch, 500))
		}
	}
}
