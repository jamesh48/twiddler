//Old way of declaring the old tweet
      let $userHandle = $('<a></a>').text(saverArray[i - 1].children('a.tweet-handle').text()).attr('class', 'tweet-handle zero-margin');
      //The Previous Message
      let $oldMessage = $('<p></p>').text(saverArray[i - 1].children('p.tweet-timeline-message').text()).attr('class', 'tweet-timeline-message zero-margin');
      //The Previous Hash
      let $oldHash = $(saverArray[i - 1]).children('a.hash-handle').attr('class', 'hash-handle');
      //The Previous time
      let $time = $('<p></p>').text(saverArray[i - 1].children('p.tweet-time').text()).attr('class', 'tweet-time zero-margin');

      //Putting togther the old Tweet
      let oldTweet = $userHandle.add($oldMessage).add($oldHash).add($time);

     $('#itc' + i).html(oldTweet).css({'background-color': colorSaverArray[i - 1]});


//Testing Code Server commit #10