export class Counter {
	count = $state(0);
	double = $derived(this.count * 2);

	constructor() {
		$effect(() => {
			if (this.count > 10) {
				console.log(2);
				this.count = 0;
			}
		});
	}
}
