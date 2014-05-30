Template.tags.rendered = function(){
  var self = this;
  $('select').selectize({
    create: true, 
    onChange: function(t){
      self.data.newtags = t;
    }}) 
};

Template.tags.helpers({
  isActive: function( active ){
    return active && ( active.indexOf(this.name) > -1 );
  }
});
