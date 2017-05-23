module.exports = function main(v) {
  // Write your cade here
   var sum=0;
   for (var i = 0; i < v.length; i++) {
	   sum+=parseInt(v[i]);
   }
   return sum;
};
