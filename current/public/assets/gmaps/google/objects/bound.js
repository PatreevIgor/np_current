(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;this.Gmaps.Google.Objects.Bound=function(e){function n(t){this.serviceObject=t}return t(n,e),n.include(Gmaps.Google.Objects.Common),n.prototype.extendWith=function(t){var e;return e=_.isArray(t)?t:[t],_.each(e,function(t){return function(e){return e.updateBounds(t)}}(this))},n.prototype.extend=function(t){return this.getServiceObject().extend(this.primitives().latLngFromPosition(t))},n}(Gmaps.Base)}).call(this);