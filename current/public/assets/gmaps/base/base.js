(function(){var t,e=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};t=["extended","included"],this.Gmaps.Base=function(){function n(){}return n.extend=function(n){var r,i,o;for(r in n)o=n[r],e.call(t,r)<0&&(this[r]=o);return null!=(i=n.extended)&&i.apply(this),this},n.include=function(n){var r,i,o;for(r in n)o=n[r],e.call(t,r)<0&&(this.prototype[r]=o);return null!=(i=n.included)&&i.apply(this),this},n}()}).call(this);