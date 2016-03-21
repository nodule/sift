on.input.in = function() {
  try {
    output({out: $.create(sift($.filter, $.in))});
  } catch (e) {
    output({error: $.create(e)});
  }
};
