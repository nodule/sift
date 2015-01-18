on.input.in = function() {
  try {
    output({out: sift(input.filter, data)});
  } catch (e) {
    output({error: e});
  }
};
