module.exports = {
  name: "filter",
  ns: "sift",
  description: "MongoDB inspired array filtering",
  async: true,
  phrases: {
    active: "Filtering array"
  },
  dependencies: {
    npm: {
      sift: require('sift')
    }
  },
  ports: {
    input: {
      filter: {
        title: "Filter",
        type: "any"
      },
      "in": {
        title: "Document",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, sift) {
          var r = function() {
            try {
              output({
                out: sift(input.filter, data)
              });
            } catch (e) {
              output({
                error: e
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "New Document",
        type: "object"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  state: {}
}