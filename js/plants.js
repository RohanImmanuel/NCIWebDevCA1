$(function () {
	let plantList = [];
	let plantListDOM = $("#product-list");

	$.getJSON("data/plants.json", function (data) {
		plantList = data;

		const plantEleTemplate = `
			<div class="col mb-5">
            	<div class="product" data-product-index="{{index}}">
                	<img src="img/platns/{{index}}.webp" alt="{{name}} Image" class="rounded shadow d-block w-100" />
                    <p class="m-0 raiting">
                    	<i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-{{rating}} fa-star"></i>
                    </p>
                    <p class="m-0 fs-5 float-end">€ {{cost}}</p>
					<h3 class="m-0 plant-name">{{name}}</h3>
					<button class="btn btn-success float-none mt-1 btn-sm" onclick="alert('{{name}} has been added to your cart')">
      					Add to Cart <i class="fas fa-shopping-cart"></i> 
    				</button>
             	</div>
           	</div>`;

		for (let i = 0; i < plantList.length; i++) {
			let plantDOM = $(
				plantEleTemplate
					.replaceAll("{{index}}", i + 1)
					.replaceAll("{{name}}", plantList[i].name)
					.replaceAll("{{cost}}", plantList[i].cost)
					.replaceAll("{{rating}}", i % 3 === 0 ? "solid" : "regular")
			);

			plantListDOM.append(plantDOM);
		}
	});
});
