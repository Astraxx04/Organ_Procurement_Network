import pandas as pd
dista=pd.read_csv('./Database/Distances.csv')
hosp=pd.read_csv('./Database/hospitals.csv')

distances = []
class Graph():

	def __init__(self, vertices):
		self.V = vertices
		self.graph = [[0 for column in range(vertices)]
					for row in range(vertices)]
		

	def printSolution(self, dist):
		print("Vertex \t Distance from Source")
		for node in range(self.V):
			print(node, "\t\t", dist[node])

	# A utility function to find the vertex with
	# minimum distance value, from the set of vertices
	# not yet included in shortest path tree
	def minDistance(self, dist, sptSet):

		# Initialize minimum distance for next node
		min = 1e7

		# Search not nearest vertex not in the
		# shortest path tree
		for v in range(self.V):
			if dist[v] < min and sptSet[v] == False:
				min = dist[v]
				min_index = v

		return min_index

	# Function that implements Dijkstra's single source
	# shortest path algorithm for a graph represented
	# using adjacency matrix representation
	def dijkstra(self, src):

		dist = [1e7] * self.V
		dist[src] = 0
		sptSet = [False] * self.V

		for cout in range(self.V):

			# Pick the minimum distance vertex from
			# the set of vertices not yet processed.
			# u is always equal to src in first iteration
			u = self.minDistance(dist, sptSet)

			# Put the minimum distance vertex in the
			# shortest path tree
			sptSet[u] = True
			
			# Update dist value of the adjacent vertices
			# of the picked vertex only if the current
			# distance is greater than new distance and
			# the vertex in not in the shortest path tree
			for v in range(self.V):
				if (self.graph[u][v] > 0 and
				sptSet[v] == False and
				dist[v] > dist[u] + self.graph[u][v]):
					dist[v] = dist[u] + self.graph[u][v]
		distances.append(dist)
		self.printSolution(dist)

# Driver program
NoOfHospital = dista.shape[0]
SrcHospital = int(input("Enter Src: ")) 
g = Graph(NoOfHospital)
mat = [[0 for _ in range(0, NoOfHospital)] for _ in range(0, NoOfHospital)]
x=2
for i in range (0, NoOfHospital):
    for j in range (0, NoOfHospital):
        mat[i][j]=dista.iloc[i,j+x]
g.graph = mat
g.dijkstra(SrcHospital)
print(distances)


# Merges two subarrays of arr[].
# First subarray is arr[l..m]
# Second subarray is arr[m+1..r]


def merge(arr, l, m, r):
	n1 = m - l + 1
	n2 = r - m

	# create temp arrays
	L = [0] * (n1)
	R = [0] * (n2)

	# Copy data to temp arrays L[] and R[]
	for i in range(0, n1):
		L[i] = arr[l + i]

	for j in range(0, n2):
		R[j] = arr[m + 1 + j]

	# Merge the temp arrays back into arr[l..r]
	i = 0	 # Initial index of first subarray
	j = 0	 # Initial index of second subarray
	k = l	 # Initial index of merged subarray

	while i < n1 and j < n2:
		if L[i] <= R[j]:
			arr[k] = L[i]
			i += 1
		else:
			arr[k] = R[j]
			j += 1
		k += 1

	# Copy the remaining elements of L[], if there
	# are any
	while i < n1:
		arr[k] = L[i]
		i += 1
		k += 1

	# Copy the remaining elements of R[], if there
	# are any
	while j < n2:
		arr[k] = R[j]
		j += 1
		k += 1

# l is for left index and r is right index of the
# sub-array of arr to be sorted


def mergeSort(arr, l, r):
	if l < r:

		# Same as (l+r)//2, but avoids overflow for
		# large l and h
		m = l+(r-l)//2

		# Sort first and second halves
		mergeSort(arr, l, m)
		mergeSort(arr, m+1, r)
		merge(arr, l, m, r)


SortedDistance = []
for dis in distances[0]:
	SortedDistance.append(dis)
mergeSort(SortedDistance, 0, NoOfHospital-1)
for i in range(1,NoOfHospital):
	print(SortedDistance[i], end = " ")
HospitalIndex = []
for sd in SortedDistance:
	for i in range(NoOfHospital):
		if (sd == distances[0][i]):
			HospitalIndex.append(i)

newMat=["None" for _ in range(0, NoOfHospital)]

for i in range(0, NoOfHospital):
	newMat[i]=[dista.iloc[HospitalIndex[i],1]]
print('\n')
for i in range(0, NoOfHospital-1):
	print(HospitalIndex[i], end = " " )
print("\n")
for i in range (1, NoOfHospital):
	print(newMat[i][0])
#for SoDis in SortedDistance[0]:
print("\n")

for i in range(0, hosp.shape[0]):
	for j in range(1, len(newMat)):
		if(newMat[j][0]==hosp.iloc[i, 1]):
			if(hosp.iloc[i, 9]>0):
				print(newMat[j][0])

