on.input.in = function() {
  try {
    output({out: sift($.filter, $.in)});
  } catch (e) {
    output({error: e});
  }
};
