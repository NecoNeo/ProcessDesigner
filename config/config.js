define(function () {
    var config = {
        "gridSize": 10,
        "nodes":
        {
            "_COMMON":
            {
                "node":
                {
                    "attr":
                    {
                        "stroke-width": 2,
                        "width": 100,
                        "height": 40,
                        "cursor": "move",
                        "r": 5
                    }
                },
                "data":
                {}
            },
            "start":
            {
                "tools":
                {
                    "image": "images/48/start_event_empty.png",
                    "nodeType": "start",
                    "text": "Start Node"
                },
                "node":
                {
                    "attr":
                    {
                        "fill": "#ffffff",
                        "stroke": "#3e3e3e"
                    },
                    "type": "text",
                    "text":{}
                },
                "data":
                {
                    "nodeName":
                    {
                        "value": "Start Node(demo)"
                    }
                }
            },
            "mission":
            {
                "tools":
                {
                    "image": "images/48/task_empty.png",
                    "nodeType": "mission",
                    "text": "Mission Node"
                },
                "node":
                {
                    "attr":
                    {
                        "fill": "#ffffff",
                        "stroke": "#3e3e3e"
                    },
                    "type": "text",
                    "text":{}
                },
                "data":
                {
                    "nodeName":
                    {
                        "value": "Mission Node(demo)"
                    }
                }
            },
            "end":
            {
                "tools":
                {
                    "image": "images/48/end_event_terminate.png",
                    "nodeType": "end",
                    "text": "End Node"
                },
                "node":
                {
                    "attr":
                    {
                        "fill": "#ffffff",
                        "stroke": "#3e3e3e"
                    },
                    "type": "text",
                    "text":{}
                },
                "data":
                {}
            }
        }
    };
    return config;
});