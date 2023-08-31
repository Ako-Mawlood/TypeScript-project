var form = document.querySelector('form');
var anchor = document.querySelector('a');
var type = document.querySelector('#type');
var toForm = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.output = function () {
        return "".concat(this.client, " ows ").concat(this.amount, "for ").concat(this.details);
    };
    return Invoice;
}());
var payment = /** @class */ (function () {
    function payment(recipeant, details, amount) {
        this.recipeant = recipeant;
        this.details = details;
        this.amount = amount;
    }
    payment.prototype.output = function () {
        return "".concat(this.recipeant, " owed ").concat(this.amount, "for ").concat(this.details);
    };
    return payment;
}());
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ListTemplete = /** @class */ (function () {
        function ListTemplete(container) {
            this.container = container;
        }
        ListTemplete.prototype.render = function (item, heading, position) {
            var li = document.createElement('li');
            var h4 = document.createElement('h4');
            h4.innerText = heading;
            li.append(h4);
            var p = document.createElement('p');
            p.innerText = item.output();
            li.append(p);
            if (position === 'start') {
                this.container.prepend(li);
            }
            else {
                this.container.append(li);
            }
        };
        return ListTemplete;
    }());
    var ul = document.querySelector('ul');
    var list = new ListTemplete(ul);
    if (type.value === 'payment') {
        var doc = new payment(toForm.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, 'end');
    }
    else {
        var doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, 'end');
    }
});
