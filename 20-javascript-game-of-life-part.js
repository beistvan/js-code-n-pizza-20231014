//  ...
        if (oldState == 0 && neighbors == 3) {
          // Ha a korábbi állapot halott (0) volt és
          // pontosan 3 élő szomszédja van, akkor:
          newState = 1; // Új cella születik, tehát a cell új állapota 1 lesz.
        } else if (oldState == 1 && (neighbors == 2 || neighbors == 3)) {
           newState = 1;
        } else {
           newState = 0;
        }
// ...
