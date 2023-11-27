# On the Fly Sampling

The area of on-the-fly sampling, compression of EO/IR Video, and RF-ITV Streams
with targets, necessitates efficient and flexible methodologies that adapt to
the nature of the data and the underlying dynamics of the task. Within this
context, our research has developed two innovative methods that have relevance
to this problem domain, even though they have not been directly applied to
EO/IR video and RF-ITV streams. Both contributions represent significant
advancements in optimization and data handling that align with the requirements
of on-the-fly sampling and compression [^1]. The integration of these methods
into the specific domain of EO/IR video and RF-ITV streams warrants further
investigation, potentially leading to substantial improvements in efficiency,
flexibility, and robustness of the associated processes.

[^1]: Despite our initial attempts to acquire realistic EO/IR and RF-ITV data from the Army, those efforts were unsuccessful. Consequently, we pivoted our focus to develop on-the-fly sampling techniques tailored for more accessible modalities. This approach retains the relevance to the original problem domain and represents a practical adaptation to the available resources.

## A Particle-based Sparse Gaussian Process Optimizer

The first method introduced in this domain is a Particle-based Sparse Gaussian
Process Optimizer (Bajaj et al., 2022). Traditional swarm-based
optimization methods, while successful in many applications, can suffer
inefficiency or local-minima entrapment. In order to overcome these challenges,
we developed a new framework that utilizes Gaussian Process Regression to gain
a deeper understanding of the underlying dynamical process of descent.

This method offers greater exploration around the current state before
determining the direction of descent. Such an explorative approach has the
potential to escape from local minima, allowing for more robust optimization.
We empirically showed the superiority of our method in non-convex optimization
scenarios and tested its applicability in high-dimensional spaces, such as
image classification. Further, it has a potential application to the sampling
and compression of EO/IR Video and RF-ITV Streams.

## Learning Generative Embeddings using an Optimal Subsampling Policy for Tensor Sketching

The second contribution to on-the-fly sampling is our research "Learning
Generative Embeddings using an Optimal Subsampling Policy for Tensor Sketching"
(Bajaj et al., 2022). With data tensors of order 3 and above becoming
increasingly prevalent, particularly in fields like images, videos, and
geographic data, accessing such large data collections has become increasingly
prohibitive.

Our proposed method learns approximate full-rank and compact tensor sketches,
providing efficient space, time, and spectral embeddings. By constructing
tensor sketches from a sample-efficient sub-sampling of tensor slices, and
employing an adaptable stochastic Thompson sampling with Dirichlet
distributions and conjugate priors, we manage to produce optimal rank-r Tucker
decompositions.

The implications of this method in the context of on-the-fly sampling and
compression of EO/IR Video and RF-ITV Streams can be seen in the efficient
handling and querying of large data collections. The use of generative sketches
allows for streamlined processing without losing critical information, a
crucial aspect in the real-time handling of such complex data.

### References

- Bajaj, C., Heo, T., & Avlur, R. (2022). Learning Generative Embeddings using
  an Optimal Subsampling Policy for Tensor Sketching. ArXiv Preprint ArXiv:
  2209.00372.

- Bajaj, C., Vaidya, O. B., & Wang, Y. (2022). A Particle-based Sparse Gaussian
  Process Optimizer. ArXiv Preprint ArXiv:2211.14517.