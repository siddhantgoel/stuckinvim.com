var script = {
    'INITIAL': {
        'question': 'Which mode are you in?',
        'responses': [
            {
                'text': 'Normal',
                'nextState': 'USER_MODE_NORMAL'
            },
            {
                'text': 'Ex',
                'nextState': 'USER_MODE_EX'
            },
            {
                'text': 'Insert/Replace/Visual',
                'nextState': 'USER_MODE_NOT_NORMAL'
            },
            {
                'text': 'What does mode mean?',
                'nextState': 'USER_MODE_DONT_KNOW'
            }
        ]
    },
    'USER_MODE_NORMAL': {
        'question': 'Do you want to save your changes to disk?',
        'responses': [
            {
                'text': 'Yes',
                'nextState': 'USER_WANTS_TO_SAVE_CHANGES'
            },
            {
                'text': 'No',
                'nextState': 'USER_DOES_NOT_WANT_TO_SAVE_CHANGES'
            }
        ]
    },
    'USER_MODE_NOT_NORMAL': {
        'question': 'We need the “normal” mode first. Press Escape to do that.',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_MODE_NORMAL'
            }
        ]
    },
    'USER_MODE_EX': {
        'question': 'We need the “normal” mode first. Type “visual” to do that',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_MODE_NORMAL'
            }
        ]
    },
    'USER_MODE_DONT_KNOW': {
        'question': 'What does the bottom line say?',
        'responses': [
            {
                'text': '-- INSERT --',
                'nextState': 'USER_MODE_NOT_NORMAL'
            },
            {
                'text': '-- REPLACE --',
                'nextState': 'USER_MODE_NOT_NORMAL'
            },
            {
                'text': '-- VISUAL --',
                'nextState': 'USER_MODE_NOT_NORMAL'
            },
            {
                'text': ': ',
                'nextState': 'USER_MODE_EX'
            },
            {
                'text': 'Nothing',
                'nextState': 'USER_MODE_NORMAL'
            }
        ]
    },
    'USER_WANTS_TO_SAVE_CHANGES': {
        'question': 'Type :wqa',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_DONE'
            }
        ]
    },
    'USER_DOES_NOT_WANT_TO_SAVE_CHANGES': {
        'question': 'Type :qa!',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_DONE'
            }
        ]
    },
    'USER_DONE': {
        'question': 'You made it! Wasn’t that fun? :)',
        'responses': [
            {
                'text': 'Start over!',
                'nextState': 'INITIAL'
            }
        ]
    }
};


new Vue({
    el: '#app',

    computed: {
        question: function() {
            return script[this.state].question;
        },
        responses: function() {
            return script[this.state].responses;
        },
        responseColumnWidth: function() {
            return 'col-lg-' + 12 / this.responses.length;
        }
    },

    data: function() {
        return {
            state: 'INITIAL'
        };
    },

    methods: {
        setState(state) {
            this.state = state;
        }
    }
})
