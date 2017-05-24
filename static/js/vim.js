$(document).ready(function() {
    var state = 'INITIAL';

    var script = {
        'INITIAL': {
            'type': 'question',
            'question': 'Which mode are you in?',
            'responses': [
                {
                    'text': 'Normal',
                    'callback': function() {
                        state = 'USER_MODE_NORMAL';
                    }
                },
                {
                    'text': 'Insert',
                    'callback': function() {
                        state = 'USER_MODE_INSERT';
                    }
                },
                {
                    'text': 'What does mode mean?',
                    'callback': function() {
                        state = 'USER_MODE_DONT_KNOW';
                    }
                }
            ]
        },
        'USER_MODE_NORMAL': {
            'type': 'question',
            'question': 'Do you want to save your changes to disk?',
            'responses': [
                {
                    'text': 'Yes',
                    'callback': function() {
                        state = 'USER_WANTS_TO_SAVE_CHANGES';
                    }
                },
                {
                    'text': 'No',
                    'callback': function() {
                        state = 'USER_DOES_NOT_WANT_TO_SAVE_CHANGES';
                    }
                }
            ]
        },
        'USER_MODE_INSERT': {
            'type': 'question',
            'question': 'Press Escape.',
            'responses': [
                {
                    'text': 'OK',
                    'callback': function() {
                        state = 'USER_MODE_NORMAL';
                    }
                }
            ]
        },
        'USER_MODE_DONT_KNOW': {
            'type': 'question',
            'question': 'Does the lowest line say "-- INSERT --"?',
            'responses': [
                {
                    'text': 'Yes',
                    'callback': function() {
                        state = 'USER_MODE_INSERT';
                    }
                },
                {
                    'text': 'No',
                    'callback': function() {
                        state = 'USER_MODE_NORMAL';
                    }
                }
            ]
        },
        'USER_WANTS_TO_SAVE_CHANGES': {
            'type': 'question',
            'text': 'Press :wqa',
            'responses': [
                {
                    'text': 'OK',
                    'callback': function() {
                        state = 'USER_DONE';
                    }
                }
            ]
        },
        'USER_DOES_NOT_WANT_TO_SAVE_CHANGES': {
            'type': 'question',
            'text': 'Press :!qa',
            'responses': [
                {
                    'text': 'OK',
                    'callback': function() {
                        state = 'USER_DONE';
                    }
                }
            ]
        },
        'USER_DONE': {
            'type': 'banner',
            'text': 'You made it! Wasn\'t that fun? :)'
        }
    };
});
