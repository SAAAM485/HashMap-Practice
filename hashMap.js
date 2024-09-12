#!/usr/bin/env node

class HashMap {
    constructor() {
        this.buckets = new Array(16).fill(undefined);
        this.length = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        if (this.has(key)) {
            this.buckets[index].value = value;
        } else {
            while (this.buckets[index] !== undefined) {
                index = (index + 1) % this.buckets.length;
            }
            this.buckets[index] = { key: key, value: value };
            this.length++;
            const loadFactor = 0.75;
            const isLoadFactorReached =
                this.length / this.buckets.length >= loadFactor;
            if (isLoadFactorReached) {
                this.rehash();
            }
        }
    }

    rehash() {
        const oldBuckets = this.buckets;
        this.buckets = new Array(oldBuckets.length * 2).fill(undefined);
        this.length = 0;
        const oldBucketsPairs = oldBuckets.filter((element) => {
            element !== undefined;
        });
        oldBucketsPairs.forEach((pair) => {
            this.set(pair.key, pair.value);
        });
    }

    get(key) {
        const index = this.hash(key);
        if (this.has(key)) {
            return this.buckets[index].value;
        } else {
            return null;
        }
    }

    has(key) {
        const index = this.hash(key);
        if (
            this.buckets[index] !== undefined &&
            key === this.buckets[index].key
        ) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        const index = this.hash(key);
        if (this.has(key)) {
            this.buckets[index] = undefined;
            this.length--;
            return true;
        } else {
            return false;
        }
    }

    getLength() {
        return this.length;
    }

    clear() {
        this.buckets = new Array(this.buckets.length).fill(undefined);
        this.length = 0;
    }

    keys() {
        const keys = this.buckets
            .filter((element) => element !== undefined)
            .map((bucket) => bucket.key);

        return keys;
    }

    values() {
        const values = this.buckets
            .filter((element) => element !== undefined)
            .map((bucket) => bucket.value);

        return values;
    }

    entries() {
        const entries = this.buckets
            .filter((element) => element !== undefined)
            .map((bucket) => [bucket.key, bucket.value]);

        return entries;
    }
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.getLength());
console.log(test.has("hat"));
console.log(test.has("bagel"));
console.log(test.get("bagel"));
console.log(test.get("hat"));
console.log(test.remove("hat"));
console.log(test.has("hat"));
console.log(test.get("hat"));
test.set("hat", "black");
test.set("bagel", "white");
console.log(test.getLength());
console.log(test.has("hat"));
console.log(test.has("bagel"));
console.log(test.get("bagel"));
console.log(test.get("hat"));
console.log(test.remove("hat"));
console.log(test.has("hat"));
console.log(test.get("hat"));
test.set("bagel", "is not white");
console.log(test.getLength());
console.log(test.get("bagel"));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

class HashSet {
    constructor() {
        this.buckets = new Array(16).fill(undefined);
        this.length = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key) {
        const index = this.hash(key);
        if (this.has(key)) {
            return;
        } else {
            while (this.buckets[index] !== undefined) {
                index = (index + 1) % this.buckets.length;
            }
            this.buckets[index] = { key: key };
            this.length++;
            const loadFactor = 0.75;
            const isLoadFactorReached =
                this.length / this.buckets.length >= loadFactor;
            if (isLoadFactorReached) {
                this.rehash();
            }
        }
    }

    rehash() {
        const oldBuckets = this.buckets;
        this.buckets = new Array(oldBuckets.length * 2).fill(undefined);
        this.length = 0;
        const oldBucketsPairs = oldBuckets.filter((element) => {
            element !== undefined;
        });
        oldBucketsPairs.forEach((pair) => {
            this.set(pair.key);
        });
    }

    get(key) {
        const index = this.hash(key);
        if (this.has(key)) {
            return this.buckets[index].key;
        } else {
            return null;
        }
    }

    has(key) {
        const index = this.hash(key);
        if (
            this.buckets[index] !== undefined &&
            key === this.buckets[index].key
        ) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        const index = this.hash(key);
        if (this.has(key)) {
            this.buckets[index] = undefined;
            this.length--;
            return true;
        } else {
            return false;
        }
    }

    getLength() {
        return this.length;
    }

    clear() {
        this.buckets = new Array(this.buckets.length).fill(undefined);
        this.length = 0;
    }

    entries() {
        const entries = this.buckets
            .filter((element) => {
                element !== undefined;
            })
            .map((bucket) => {
                bucket.key;
            });

        return entries;
    }
}
