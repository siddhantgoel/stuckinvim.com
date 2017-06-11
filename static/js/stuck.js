var script = {
    'INITIAL': {
        'question': 'Which mode are you in?',
        'responses': [
            {
                'text': 'Normal Mode',
                'nextState': 'USER_MODE_NORMAL'
            },
            {
                'text': 'Insert Mode',
                'nextState': 'USER_MODE_INSERT'
            },
            {
                'text': 'Replace Mode',
                'nextState': 'USER_MODE_REPLACE'
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
    'USER_MODE_INSERT': {
        'question': 'We need the "normal" mode first. Press Escape to do that.',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_MODE_NORMAL'
            }
        ]
    },
    'USER_MODE_REPLACE': {
        'question': 'We need the "normal" mode first. Press Escape to do that.',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_MODE_NORMAL'
            }
        ]
    },
    'USER_MODE_DONT_KNOW': {
        'question': 'Does the bottom line say "-- INSERT --"?',
        'responses': [
            {
                'text': 'Yes',
                'nextState': 'USER_MODE_INSERT'
            },
            {
                'text': 'No',
                'nextState': 'USER_MODE_NORMAL'
            }
        ]
    },
    'USER_WANTS_TO_SAVE_CHANGES': {
        'question': 'OK! Press :wqa',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_DONE'
            }
        ]
    },
    'USER_DOES_NOT_WANT_TO_SAVE_CHANGES': {
        'question': 'OK! Press :!qa',
        'responses': [
            {
                'text': 'Done!',
                'nextState': 'USER_DONE'
            }
        ]
    },
    'USER_DONE': {
        'question': 'You made it! Wasn\'t that fun? :)',
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
