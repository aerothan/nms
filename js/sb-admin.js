(function($) {
	"use strict"; // Start of use strict


	// Toggle the side navigation
	$("#sidebarToggle").click(function(e) {
		e.preventDefault();
		$("body").toggleClass("sidebar-toggled");
		$(".sidebar").toggleClass("toggled");
	});

	// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
	$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
		if ($window.width() > 768) {
			var e0 = e.originalEvent,
				delta = e0.wheelDelta || -e0.detail;
			this.scrollTop += (delta < 0 ? 1 : -1) * 30;
			e.preventDefault();
		}
	});

	// Scroll to top button appear
	$(document).scroll(function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// Smooth scrolling using jQuery easing
	$(document).on('click', 'a.scroll-to-top', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});

})(jQuery); // End of use strict

function getColor(color) {
	if (color.includes("Magno-Gold"))
		return "#F6A723"
	else if (color.includes("Gold"))
		return "#6E5012"
	else if (color.includes("Carbon Crystal"))
		return "#BC3731"
	else if (color.includes("Carbon"))
		return "#7C322E"
	else if (color.includes("TetraCobalt"))
		return "#025B85"
	else if (color.includes("Cobalt"))
		return "#0B4762"
	else if (color.includes("Cadmium"))
		return "#581115"
	else if (color.includes("Copper"))
		return "#946714"
	else if (color.includes("Emeril"))
		return "#294C23"
	else if (color.includes("Indium"))
		return "#0C3662"
	else if (color.includes("Chromatic Metal"))
		return "#251314"
	else if (color.includes("Ammonia"))
		return "#0A723C"
	else if (color.includes("Aronium"))
		return "#F6A723"
	else if (color.includes("Ferrite"))
		return "#5B5A55"
	else if (color.includes("Silver"))
		return "#5C5A55"
	else if (color.includes("Cactus Flesh"))
		return "#1D6827"
	else if (color.includes("Destablised Sodium"))
		return "#F16E17"
	else if (color.includes("Sodium"))
		return "#9C4E22"
	else if (color.includes("Salt"))
		return "#1B623A"
	else if (color.includes("Solanium"))
		return "#78361E"
	else if (color.includes("Chlorine"))
		return "#113611"
	else if (color.includes("Chloride Lattice"))
		return "#1E8941"
	else if (color.includes("Coprite"))
		return "#533E2D"
	else if (color.includes("Di-hydrogen Jelly"))
		return "#C21646"
	else if (color.includes("Di-hydrogen"))
		return "#25465C"
	else if (color.includes("Dioxite"))
		return "#1C3D8C"
	else if (color.includes("Mordite"))
		return "#392634"
	else if (color.includes("Dirty Bronze"))
		return "#F1AA22"
	else if (color.includes("Grantine"))
		return "#F1AA22"
	else if (color.includes("Herox"))
		return "#F1AA22"
	else if (color.includes("Geodesite"))
		return "#F1AA22"
	else if (color.includes("Iridesite"))
		return "#F1AA22"
	else if (color.includes("Lemmium"))
		return "#F1AA22"
	else if (color.includes("Thermic Condensate"))
		return "#F1AA22"
	else if (color.includes("Platinum"))
		return "#385457"
	else if (color.includes("Pyrite"))
		return "#925113"
	else if (color.includes("Gamma Root"))
		return "#7E5E21"
	else if (color.includes("Fungal Mould"))
		return "#08733C"
	else if (color.includes("Frost Crystal"))
		return "#193F8C"
	else if (color.includes("Kelp Sac"))
		return "#1B768F"
	else if (color.includes("Oxygen"))
		return "#7B3430"
	else if (color.includes("Living Slime"))
		return "#3E522F"
	else if (color.includes("Runaway Mould"))
		return "#405130"
	else if (color.includes("Marrow Bulb"))
		return "#475930"
	else if (color.includes("Nitrogen"))
		return "#8D6623"
	else if (color.includes("Sulphurine"))
		return "#214532"
	else if (color.includes("Radon"))
		return "#36305E"
	else if (color.includes("Paraffinium"))
		return "#383442"
	else if (color.includes("Phosphorus"))
		return "#8C240F"
	else if (color.includes("Nanite"))
		return "#192E3F"
	else if (color.includes("Pugneum"))
		return "#4C2A56"
	else if (color.includes("Rare Metal Element"))
		return "#8B7E71"
	else if (color.includes("Residual Goop"))
		return "#5B6F35"
	else if (color.includes("Viscous Fluid"))
		return "#40512F"
	else if (color.includes("Glass"))
		return "#F3A923"
	else if (color.includes("Star Bulb"))
		return "#296879"
	else if (color.includes("Rusted Metal"))
		return "#3E5230"
	else if (color.includes("Superoxide Crystal"))
		return "#BA3930"
	else if (color.includes("Tritium"))
		return "#DDDCD0"
	else if (color.includes("Uranium"))
		return "#A37610"
	else if (color.includes("Unstable Plasma"))
		return "#C01746"
	else if (color.includes("Warp Cell"))
		return "#C01746"
	else if (color.includes("Starship Launch Fuel"))
		return "#C01746"
	else if (color.includes("Ion Battery"))
		return "#F3A923"
	else if (color.includes("Life Support Gel"))
		return "#C01746"
	else if (color.includes("Deuterium"))
		return "#25465C"
	else if (color.includes("Technology"))
		return "#0059A4"
	else if (color.includes("Hexite"))
		return "#6D4829"
	else if (color.includes("Pearl"))
		return "#006D49"
}
