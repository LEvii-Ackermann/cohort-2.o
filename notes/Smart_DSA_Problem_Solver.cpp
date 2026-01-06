#include <bits/stdc++.h>
using namespace std;

/* ================= SORTING ================= */

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1])
                swap(arr[j], arr[j + 1]);
    cout << "Time: O(n^2), Space: O(1)\n";
}

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIdx])
                minIdx = j;
        swap(arr[i], arr[minIdx]);
    }
    cout << "Time: O(n^2), Space: O(1)\n";
}

void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    cout << "Time: O(n^2), Space: O(1)\n";
}

void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> L(arr.begin() + l, arr.begin() + m + 1);
    vector<int> R(arr.begin() + m + 1, arr.begin() + r + 1);

    int i = 0, j = 0, k = l;
    while (i < L.size() && j < R.size())
        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    while (i < L.size()) arr[k++] = L[i++];
    while (j < R.size()) arr[k++] = R[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

/* ================= SEARCHING ================= */

int linearSearch(const vector<int>& arr, int key) {
    for (int i = 0; i < arr.size(); i++)
        if (arr[i] == key) return i;
    return -1;
}

int binarySearch(const vector<int>& arr, int key) {
    int l = 0, r = arr.size() - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == key) return m;
        else if (arr[m] < key) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

/* ================= STACK ================= */

vector<int> stk;

void pushStack(int x) {
    stk.push_back(x);
    cout << "Pushed: " << x << " | Time: O(1), Space: O(1)\n";
}

void popStack() {
    if (stk.empty())
        cout << "Stack is empty\n";
    else {
        cout << "Popped: " << stk.back() << " | Time: O(1), Space: O(1)\n";
        stk.pop_back();
    }
}

/* ================= QUEUE ================= */

queue<int> q;

void enqueue(int x) {
    q.push(x);
    cout << "Enqueued: " << x << " | Time: O(1), Space: O(1)\n";
}

void dequeue() {
    if (q.empty())
        cout << "Queue is empty\n";
    else {
        cout << "Dequeued: " << q.front() << " | Time: O(1), Space: O(1)\n";
        q.pop();
    }
}

/* ================= GRAPH ================= */

unordered_map<int, vector<int>> graph;

void addEdge(int u, int v) {
    graph[u].push_back(v);
    graph[v].push_back(u);
}

void dfsHelper(int node, unordered_set<int>& visited) {
    visited.insert(node);
    cout << node << " ";
    for (int nei : graph[node])
        if (!visited.count(nei))
            dfsHelper(nei, visited);
}

void dfs(int start) {
    unordered_set<int> visited;
    cout << "DFS Traversal: ";
    dfsHelper(start, visited);
    cout << "\nTime: O(V + E), Space: O(V)\n";
}

void bfs(int start) {
    unordered_set<int> visited;
    queue<int> qq;
    qq.push(start);
    visited.insert(start);

    cout << "BFS Traversal: ";
    while (!qq.empty()) {
        int node = qq.front(); qq.pop();
        cout << node << " ";
        for (int nei : graph[node]) {
            if (!visited.count(nei)) {
                visited.insert(nei);
                qq.push(nei);
            }
        }
    }
    cout << "\nTime: O(V + E), Space: O(V)\n";
}

/* ================= MAIN ================= */

int main() {
    int choice;

    do {
        cout << "\n===== Smart DSA Problem Solver =====\n";
        cout << "1. Sorting\n2. Searching\n3. Stack\n4. Queue\n5. Graph\n0. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        /* ---------- SORTING ---------- */
        if (choice == 1) {
            cout << "\n1. Bubble\n2. Selection\n3. Insertion\n4. Merge\n";
            cout << "Choose sorting method: ";
            int s; cin >> s;

            cout << "Enter number of elements: ";
            int n; cin >> n;

            vector<int> arr(n);
            cout << "Enter elements: ";
            for (int &x : arr) cin >> x;

            if (s == 1) bubbleSort(arr);
            else if (s == 2) selectionSort(arr);
            else if (s == 3) insertionSort(arr);
            else {
                mergeSort(arr, 0, n - 1);
                cout << "Time: O(n log n), Space: O(n)\n";
            }

            cout << "Sorted Array: ";
            for (int x : arr) cout << x << " ";
            cout << endl;
        }

        /* ---------- SEARCHING ---------- */
        else if (choice == 2) {
            cout << "\n1. Linear Search\n2. Binary Search\nChoose: ";
            int s; cin >> s;

            cout << "Enter number of elements: ";
            int n; cin >> n;

            vector<int> arr(n);
            cout << "Enter elements: ";
            for (int &x : arr) cin >> x;

            cout << "Enter key to search: ";
            int key; cin >> key;

            if (s == 2) {
                sort(arr.begin(), arr.end());
                cout << "Sorted Array: ";
                for (int x : arr) cout << x << " ";
                cout << endl;
            }

            int res = (s == 1) ? linearSearch(arr, key)
                               : binarySearch(arr, key);

            if (res != -1)
                cout << "Element found at index " << res << endl;
            else
                cout << "Element not found\n";

            cout << (s == 1 ? "Time: O(n)\n" : "Time: O(log n)\n");
        }

        /* ---------- STACK ---------- */
        else if (choice == 3) {
            cout << "\n1. Push\n2. Pop\nChoose: ";
            int op; cin >> op;
            if (op == 1) {
                cout << "Enter value: ";
                int x; cin >> x;
                pushStack(x);
            } else popStack();
        }

        /* ---------- QUEUE ---------- */
        else if (choice == 4) {
            cout << "\n1. Enqueue\n2. Dequeue\nChoose: ";
            int op; cin >> op;
            if (op == 1) {
                cout << "Enter value: ";
                int x; cin >> x;
                enqueue(x);
            } else dequeue();
        }

        /* ---------- GRAPH ---------- */
        else if (choice == 5) {
            graph.clear();
            cout << "Enter number of edges: ";
            int e; cin >> e;

            cout << "Enter edges (u v):\n";
            while (e--) {
                int u, v; cin >> u >> v;
                addEdge(u, v);
            }

            cout << "Enter starting node: ";
            int start; cin >> start;

            cout << "1. DFS\n2. BFS\nChoose: ";
            int g; cin >> g;

            if (g == 1) dfs(start);
            else bfs(start);
        }

    } while (choice != 0);

    cout << "\nProgram Ended Successfully.\n";
    return 0;
}