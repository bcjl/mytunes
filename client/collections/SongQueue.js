// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
    if(this.length < 2){
      this.playFirst()
    }
    });
  },

  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function(song){
    this.add(song);
    console.log('enqueue was caled');
    this.playFirst();
    // if(true){
    //   this.playFirst();
    // } 
  },

  dequeue: function(song){
    this.remove();
  },

});