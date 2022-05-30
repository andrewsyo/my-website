var tmax_optionsGlobal = {
    delay: 0.25,
    repeat: 0,
    repeatDelay: 0.25,
    yoyo: true
  };
  
  CSSPlugin.useSVGTransformAttr = true;
  
  var stagger_opts_from = {
    opacity: 0,
    scale: 0,
    transformOrigin: "center center",
    force3D: true
  };
  
  var stagger_opts_to = {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeInOut,
    force3D: true
  };
  
  var tl = new TimelineMax(tmax_optionsGlobal),
    path = $("svg.polyman path"),
    stagger_val = 0.0125,
    duration = 1.25;
  
  tl.staggerFromTo(
    path,
    duration,
    stagger_opts_from,
    stagger_opts_to,
    stagger_val,
    0
  );
  