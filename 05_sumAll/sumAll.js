const sumAll = function(n1, n2) {
    let tsum=0;
   if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    return 'ERROR';
   }
   else if(n1<0 || n2<0){
            return 'ERROR';
        }
        else if(n1<n2){
                for(let i=n1;i<=n2;i++){
                    tsum+=i;
                }
            }
            else
            {
                for(let i=n1;i>=n2;i--){
                    tsum+=i;
                }
            }
    return tsum;
};

// Do not edit below this line
module.exports = sumAll;
