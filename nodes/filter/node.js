on.input.in = function() {
  try {
    output({out: sift(input.filter, input.in)});
  } catch (e) {
    output({error: e});
  }
};
