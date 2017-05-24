var script = {
    'INITIAL': {
        'question': 'Which mode are you in?',
        'responses': [
            {
                'text': 'Normal',
                'nextState': 'USER_MODE_NORMAL'
            },
            {
                'text': 'Insert',
                'nextState': 'USER_MODE_INSERT'
            },
            {
                'text': 'What does mode mean?',
                'nextState': 'USER_MODE_DONT_KNOW'
            }
        ]
    },
    'USER_MODE_NORMAL': {
        'question': 'Cool! Do you want to save your changes to disk?',
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
                'text': 'OK',
                'nextState': 'USER_MODE_NORMAL'
            }
        ]
    },
    'USER_MODE_DONT_KNOW': {
        'question': 'No problem. Does the lowest line say "-- INSERT --"?',
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
        'question': 'Almost there! Press :wqa',
        'responses': [
            {
                'text': 'OK',
                'nextState': 'USER_DONE'
            }
        ]
    },
    'USER_DOES_NOT_WANT_TO_SAVE_CHANGES': {
        'question': 'Almost there! Press :!qa',
        'responses': [
            {
                'text': 'OK',
                'nextState': 'USER_DONE'
            }
        ]
    },
    'USER_DONE': {
        'question': 'You made it! Wasn\'t that fun? :)',
        'responses': [
            {
                'text': 'Let\s do it again!',
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
        updateState(response) {
            this.state = response.nextState;
        }
    }
})
