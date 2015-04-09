// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
    if(this.length < 2){
      this.playFirst()
    }
    });

    this.on({
      'ended':this.dequeue, 
      'dequeue':this.dequeue
    });
    // this.on('dequeue', this.dequeue);
  },

  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function(song){
    this.add(song);
  },

  dequeue: function(){
    this.remove(this.at(0));
    if(this.length > 0){
      this.playFirst();
    }
  },

});