import { Tooltip } from "antd";

export const postsData = [
  {
    id: 1,
    title: "My first Post",
    profileName: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    code: ` Simple C++ program to compute sum of
            // subarray elements
            #include <bits/stdc++.h>
            using namespace std;
            
            // Computes sum all sub-array
            long int SubArraySum(int arr[], int n)
            {
                long int result = 0, temp = 0;
            
                // Pick starting point  
                for (int i = 0; i < n; i++) {
                    // Pick ending point
                    temp = 0;
                    for (int j = i; j < n; j++) {
                        // sum subarray between current
                        // starting and ending points
                        temp += arr[j];
                        result += temp;
                    }
                }
                return result;
            }
            
            // Driver code
            int main()
            {
                int arr[] = { 1, 2, 3 };
                int n = sizeof(arr) / sizeof(arr[0]);
                cout << "Sum of SubArray : " << SubArraySum(arr, n)
                    << endl;
                return 0;
            }`,
    likeCount: 42,
    comments: [
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 11:22:33">
            <span>8 hours ago</span>
          </Tooltip>
        ),
      },
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 10:22:33">
            <span>9 hours ago</span>
          </Tooltip>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "My second Post",
    profileName: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    code: ` Simple C++ program to compute sum of
            // subarray elements
            #include <bits/stdc++.h>
            using namespace std;
            
            // Computes sum all sub-array
            long int SubArraySum(int arr[], int n)
            {
                long int result = 0, temp = 0;
            
                // Pick starting point  
                for (int i = 0; i < n; i++) {
                    // Pick ending point
                    temp = 0;
                    for (int j = i; j < n; j++) {
                        // sum subarray between current
                        // starting and ending points
                        temp += arr[j];
                        result += temp;
                    }
                }
                return result;
            }
            
            // Driver code
            int main()
            {
                int arr[] = { 1, 2, 3 };
                int n = sizeof(arr) / sizeof(arr[0]);
                cout << "Sum of SubArray : " << SubArraySum(arr, n)
                    << endl;
                return 0;
            }`,
    likeCount: 42,
    comments: [
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 11:22:33">
            <span>8 hours ago</span>
          </Tooltip>
        ),
      },
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 10:22:33">
            <span>9 hours ago</span>
          </Tooltip>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "My third Post",
    profileName: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    code: ` Simple C++ program to compute sum of
            // subarray elements
            #include <bits/stdc++.h>
            using namespace std;
            
            // Computes sum all sub-array
            long int SubArraySum(int arr[], int n)
            {
                long int result = 0, temp = 0;
            
                // Pick starting point  
                for (int i = 0; i < n; i++) {
                    // Pick ending point
                    temp = 0;
                    for (int j = i; j < n; j++) {
                        // sum subarray between current
                        // starting and ending points
                        temp += arr[j];
                        result += temp;
                    }
                }
                return result;
            }
            
            // Driver code
            int main()
            {
                int arr[] = { 1, 2, 3 };
                int n = sizeof(arr) / sizeof(arr[0]);
                cout << "Sum of SubArray : " << SubArraySum(arr, n)
                    << endl;
                return 0;
            }`,
    likeCount: 42,
    comments: [
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 11:22:33">
            <span>8 hours ago</span>
          </Tooltip>
        ),
      },
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 10:22:33">
            <span>9 hours ago</span>
          </Tooltip>
        ),
      },
    ],
  },
  {
    id: 4,
    title: "My fourth Post",
    profileName: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    code: ` Simple C++ program to compute sum of
            // subarray elements
            #include <bits/stdc++.h>
            using namespace std;
            
            // Computes sum all sub-array
            long int SubArraySum(int arr[], int n)
            {
                long int result = 0, temp = 0;
            
                // Pick starting point  
                for (int i = 0; i < n; i++) {
                    // Pick ending point
                    temp = 0;
                    for (int j = i; j < n; j++) {
                        // sum subarray between current
                        // starting and ending points
                        temp += arr[j];
                        result += temp;
                    }
                }
                return result;
            }
            
            // Driver code
            int main()
            {
                int arr[] = { 1, 2, 3 };
                int n = sizeof(arr) / sizeof(arr[0]);
                cout << "Sum of SubArray : " << SubArraySum(arr, n)
                    << endl;
                return 0;
            }`,
    likeCount: 42,
    comments: [
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 11:22:33">
            <span>8 hours ago</span>
          </Tooltip>
        ),
      },
      {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://joeschmoe.io/api/v1/random",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip title="2016-11-22 10:22:33">
            <span>9 hours ago</span>
          </Tooltip>
        ),
      },
    ],
  },
];
