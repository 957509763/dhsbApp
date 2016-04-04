$.fn.extend({ShakeBorder: function(opciones) {
					var ShakeBorder=this;
					theClassShake=$(ShakeBorder).attr('class');
					
					
					defaults = {shake:true,border:true}
					var opciones = $.extend({}, defaults, opciones);
					
					if(opciones.shake){
						shakecode ='<style>@-webkit-keyframes spaceboots {0%   { -webkit-transform: translate(2px, 1px)   rotate(0deg); }10%  { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }	20%  { -webkit-transform: translate(-3px, 0px)  rotate(1deg); }';
						shakecode=shakecode+'30%  { -webkit-transform: translate(0px, 2px)   rotate(0deg); }';
						shakecode=shakecode+'40%  { -webkit-transform: translate(1px, -1px)  rotate(1deg); }';
						shakecode=shakecode+'50%  { -webkit-transform: translate(-1px, 1px)  rotate(-1deg); }';
						shakecode=shakecode+'60%  { -webkit-transform: translate(-3px, -2px)  rotate(0deg); }';
						shakecode=shakecode+'70%  { -webkit-transform: translate(2px, 1px)   rotate(-1deg); }';
						shakecode=shakecode+'80%  { -webkit-transform: translate(-1px, -2px) rotate(1deg); }';
						shakecode=shakecode+'90%  { -webkit-transform: translate(2px, -1px)   rotate(0deg); }';
						shakecode=shakecode+'100% { -webkit-transform: translate(1px, -2px)  rotate(-1deg); }}';
						shakecode=shakecode+"."+theClassShake+",."+theClassShake+":focus,."+theClassShake+",."+theClassShake+":focus {-webkit-animation-name: 'spaceboots';-webkit-animation-duration: 0.8s;-webkit-transform-origin:50% 50%;-webkit-animation-iteration-count: infinite;	-webkit-animation-timing-function: linear;}";
						//5shakecode=shakecode+'.'+theClassShake+' {display:block;	position:relative;}';
						shakecode=shakecode+'.'+theClassShake+'.inline {display:inline-block;}</style>';
						
						
						shakecode ='<style>.'+theClassShake;
						shakecode=shakecode+'.'+theClassShake+' {-webkit-animation-name: shakeEffect;';
						shakecode=shakecode+'-moz-animation-name: shakeEffect;';
						shakecode=shakecode+'animation-name: shakeEffect;';
						shakecode=shakecode+'-webkit-animation-duration: 0.8s;';
						shakecode=shakecode+'-moz-animation-duration: 0.8s;'
						shakecode=shakecode+'animation-duration: 0.8s;';
						shakecode=shakecode+'-webkit-transform-origin:50% 50%;';
						shakecode=shakecode+'-moz-transform-origin:50% 50%;';
			shakecode=shakecode+'transform-origin:50% 50%;';
			shakecode=shakecode+'-webkit-animation-iteration-count: infinite;';
			shakecode=shakecode+'-moz-animation-iteration-count: infinite;';
			shakecode=shakecode+'animation-iteration-count: infinite;';
			shakecode=shakecode+'-webkit-animation-timing-function: linear;';
			shakecode=shakecode+'-moz-animation-timing-function: linear;';
			shakecode=shakecode+'animation-timing-function: linear;';
			shakecode=shakecode+'}';
			
shakecode=shakecode+theClassShake+'</style>';						
			$(ShakeBorder).before(shakecode);					
			}
				if(opciones.border){
						shakecode='';
						shakecode=shakecode+"<style>."+theClassShake+" img{opacity:1;filter: alpha(opacity = 100);}";
						shakecode=shakecode+"."+theClassShake+" .Ot1{border-color:#0088EA;box-shadow:0 0 10px #0285E2;}"
						shakecode=shakecode+"."+theClassShake+" .outer2{opacity:1;filter: alpha(opacity = 100);box-shadow:0 0 20px #8EB9FF;} </style>"
						$(ShakeBorder).before(shakecode);
			}
	}
});