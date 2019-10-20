String.prototype.bool = function(){ 
  if(Number.isNaN(parseInt(this)))
    return true;
  else
    return Boolean(parseInt(this));
}

Number.prototype.bool = function(){ 
  if(Number.isNaN(parseInt(this)))
    return true;
  else
    return Boolean(parseInt(this));
}


Boolean.prototype.bool = function(){ 
  if(Number.isNaN(parseInt(this)))
    return true;
  else
    return Boolean(parseInt(this));
}