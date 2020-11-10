var app = new Vue({
    el: '#app',
    data: {
        webname: "After school clubs",

        subject: [{
                id: 1,
                image: "image/english.png",
                name: "Foundation English",
                location: "Dartford",
                price: 1.50,
                space: 5,
            },

            {
                id: 2,
                image: "image/math.png",
                name: "Foundation Math",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 3,
                image: "image/science.png",
                name: "Foundation Biology",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 4,
                image: "image/science.png",
                name: "Foundation Physics",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 5,
                image: "image/science.png",
                name: "Foundation Chemistry",
                location: "bexleyheath",
                price: 1.50,
                space: 5,
            },
            {
                id: 6,
                image: "image/math.png",
                name: "Higher Maths",
                location: "Welling",
                price: 2.00,
                space: 5,
            },
            {
                id: 7,
                image: "image/english.png",
                name: "Higher English",
                location: "Dartford",
                price: 2.00,
                space: 5,
            },
            {
                id: 8,
                image: "image/ep.png",
                name: "Ethics & Philosophy",
                location: "Erith",
                price: 2.00,
                space: 5,
            },
            {
                id: 9,
                image: "image/business.png",
                name: "Business studdies",
                location: "Erith",
                price: 2.00,
                space: 5,
            },
            {
                id: 10,
                image: "image/computer.png",
                name: "Computer Science",
                location: "Erith",
                price: 2.00,
                space: 5,
            },
        ],

        cart: [],
        ShowSubject: true,
        Order: {
            name: '',
            phone: '',
        }
    },

    methods: {
        addToCart: function () {
            this.cart.push(this.subject.id)
        },
        ShowBasket() {
            this.ShowSubject = this.ShowSubject ? false : true;
        },

        alert() {
            alert("Order Completed");
        }
    },

    computed: {
        CartItemCount: function () {
            return this.cart.length || '';
        },
        CanAddToCart: function () {
            return this.subject[0].space > this.CartItemCount;
        },
    }

})