function Parent(newName, newAge, newStatus) {
  var age = newage;
  var status = newstatus;
  this.name = newname;
  this.getAge = function() {
    return age;
  };
}

Parent.prototype.getstatus = function() {
  return this.status;
};
Parent.prototype.getName = function() {
  return this.name;
};
Parent.prototype.getHello = function() {
  alert("NAme is" + this.getName());
  alert("NAme is" + this.getAge());
  alert("I am " + this.getstatus());
};

var p1 = new Parent("Sam", 23, "single");
p1.age = 24;
p1.name = "Peter";
p1.getHello();
