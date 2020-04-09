$(function () {
    const basicPack = $('#basic-pack');
    const profPack = $('#prof-pack');
    const premiumPack = $('#premium-pack');
    const chosenPackage = $('.package-choose').find('p');
    const packageListElement = $('#package');
    const priceAddLabel = $('label.price-add');
    const divMenu = $('div.menu');
    const totalPrice = $('#total').find('span');

    //  packs appearing in the list

    basicPack.on('click', function () {
        console.log('hello');
        chosenPackage.text(basicPack.text());
        if(chosenPackage.text() === "Basic") {
            packageListElement.find('small').text(chosenPackage.text());
            packageListElement.find('span').text(basicPack.data("price"));


        }
    });
    profPack.on('click', function () {
        console.log('hello');
        chosenPackage.text(profPack.text());
        if(chosenPackage.text() === "Professional") {
            packageListElement.find('small').text(chosenPackage.text());
            packageListElement.find('span').text(profPack.data("price"));

        }
    });
    premiumPack.on('click', function () {
        console.log('hello');
        chosenPackage.text(premiumPack.text());
        if(chosenPackage.text() === "Premium") {
            packageListElement.find('small').text(chosenPackage.text());
            packageListElement.find('span').text(premiumPack.data("price"));

        }
    });

// rotating arrow in dropbox

    divMenu.on('click', function () {
        priceAddLabel.toggleClass('non-display');
        $('#package').addClass('show-element');
        divMenu.css('display', 'none');
        chosenPackage.css('color', 'black');
        $('img.arrow').toggleClass('none-rotate');
    });

//  showing/hiding menu in dropbox

    $('div.package-choose').on('click', function () {
        $('img.arrow').toggleClass('none-rotate');
        priceAddLabel.toggleClass('non-display');
        if(divMenu.css('display') === 'block') {
            divMenu.css('display', 'none');
        } else {
            divMenu.css('display', 'block');
        }
    });

    // appearing listElements on "check"

    $('#account-input').on('click', function () {
        $('#accounting').toggleClass('show-element')
    });
    $('#rental').on('click', function () {
        $('#terminal').toggleClass('show-element')
    });

// counting price with whole numbers input

    $('#product-quo').on('keyup', function () {
        let productSum = parseInt($('#product-quo').val(), 10) * 0.5;
        if (productSum >= 0.5) {
            $('#products').addClass('show-element');
            $('#products').find('small').text($('#product-quo').val() + " * $0.5");

            $('#products').find('span').text("$" + productSum);
        }
        if (productSum <= 0 || $('#product-quo').val() === "") {
            $('#products').removeClass('show-element')
        }

    });
    $('#order-quo').on('keyup', function () {
        let orderSum = parseInt($('#order-quo').val(), 10) * 0.25;
        if(orderSum >= 0.25) {
            $('#orders').addClass('show-element');
            $('#orders').find('small').text($('#order-quo').val() + " * $0.25");
            $('#orders').find('span').text("$" + orderSum)
        }
        if(orderSum <= 0 || $('#order-quo').val() === "") {
            $('#orders').removeClass('show-element')
        }
    });

// counting total price

    $('.calc-form').on('click keyup', function () {
        const productsPrice = parseInt($('#product-quo').val(), 10) * 0.5;
        const ordersPrice = parseInt($('#order-quo').val(), 10) * 0.25;
        const packagePrice = parseInt($('li#package').find('span').text(), 10);
        const accountPrice = parseInt($('#accounting').find('span').text(), 10);
        const terminalPrice = parseInt($('#terminal').find('span').text(), 10);

        let lastPrice = 0;

        if($('#orders').hasClass('show-element')) {
            lastPrice += ordersPrice;
        }
        if($('#products').hasClass('show-element')) {
            lastPrice += productsPrice;
        }
        if($('#accounting').hasClass('show-element')) {
            lastPrice += accountPrice;
        }
        if($('#package').hasClass('show-element')) {
            lastPrice += packagePrice;
        }
        if($('#terminal').hasClass('show-element')) {
            lastPrice += terminalPrice;
        }

        totalPrice.text(lastPrice);
    });

    // hamburher menu
    const burgerMenu = $('.burger-menu');
    burgerMenu.on('click', function () {
        console.log("hello");
        burgerMenu.toggleClass('change');
        if(burgerMenu.hasClass('change')) {
            $('.page-menu ul').toggleClass('switch-menu')
        } else {
            $('.page-menu ul').toggleClass('switch-menu')
        }

    });

});